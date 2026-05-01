const fs = require('fs');
const path = require('path');

const replacementStr = `<div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                    <div className="absolute top-6 left-0 w-1.5 h-8 bg-green-500 rounded-r-md group-hover:h-12 group-hover:top-4 transition-all duration-300" />
                    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed flex-grow group-hover:text-slate-800 transition-colors">
                      {benefit}
                    </p>
                  </div>`;

// Use a regex that ignores whitespace/line endings between elements
const regex = /<div key=\{i\} className="flex gap-3 items-start p-2">\s*<CheckCircle2 className="w-5 h-5 text-green-500 mt-1 shrink-0" \/>\s*<p className="text-slate-600 hover:text-neutral-900 hover:font-medium transition duration-100 text-sm leading-snug">\s*\{benefit\}\s*<\/p>\s*<\/div>/g;

function processDir(dir) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        processDir(fullPath);
      } else if (file === 'page.tsx') {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (regex.test(content)) {
          const newContent = content.replace(regex, replacementStr);
          fs.writeFileSync(fullPath, newContent);
          console.log("Updated", fullPath);
        } else {
          console.log("Not matched in", fullPath);
        }
      }
    }
  } catch (err) {
    console.error("Error processing", dir, err);
  }
}

processDir('./app/services');
