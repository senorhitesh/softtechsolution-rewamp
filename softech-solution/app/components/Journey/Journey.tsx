const JOURNEY_DATA = [
  {
    year: "2013",
    tag: "Founded",
    title: "Foundation",
    desc: "Two visionaries laid the groundwork, building on Ruby on Rails and a shared passion for solving real problems with elegant software.",
  },
  {
    year: "2014",
    tag: "Expansion",
    title: "Mobile App Department",
    desc: "As mobile surged, we embraced it fully — launching a dedicated iOS and Android team to meet growing demand for cross-platform apps.",
  },
  {
    year: "2015",
    tag: "New Vertical",
    title: "Odoo Origination",
    desc: "Our focus on comprehensive ERP led us to Odoo. We've since served over 85 clients with deep integrations and continued partnerships.",
  },
  {
    year: "2017",
    tag: "Recognition",
    title: "Top Rated on Upwork",
    desc: "Years of client dedication paid off — we earned Top Rated status on Upwork, underscoring our commitment to quality and delivery.",
  },
  {
    year: "2019",
    tag: "Scale",
    title: "50+ Team Members",
    desc: "Crossed the 50-person milestone, bringing in specialists across design, DevOps, and data engineering to serve larger clients.",
  },
  {
    year: "2022",
    tag: "Global",
    title: "International Reach",
    desc: "Opened partnerships across North America, Europe, and the Middle East — delivering solutions that transcend time zones.",
  },
  {
    year: "2024",
    tag: "Today",
    title: "AI-Driven Future",
    desc: "Integrating AI and LLMs into our product stack, helping clients automate workflows and extract intelligence from their data.",
  },
];

import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselItem,
} from "@/components/motion-primitives/carousel";

const Journey = () => {
  return (
    <div className="w-full py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Our Journey
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
          A decade of building and growing
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-full">
        <Carousel>
          <CarouselContent className="-ml-4">
            {JOURNEY_DATA.map((item, index) => (
              <CarouselItem key={index} className="basis-1/3 pl-4">
                <div className="flex flex-col items-center">
                  {/* Year Pill */}
                  <span className="bg-indigo-600 text-white text-xs font-medium px-4 py-1.5 rounded-full mb-3 tracking-wide">
                    {item.year}
                  </span>

                  {/* Timeline Line + Dot */}
                  <div className="relative w-full flex items-center justify-center h-[2px] mb-0">
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-zinc-200 dark:bg-zinc-700" />
                    <div className="relative z-10 w-2.5 h-2.5 rounded-full bg-indigo-600 ring-2 ring-white dark:ring-zinc-950 ring-offset-0" />
                  </div>

                  {/* Stem */}
                  <div className="w-px h-7 bg-zinc-200 dark:bg-zinc-700" />

                  {/* Card */}
                  <div className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-500 dark:hover:border-indigo-500 group">
                    <span className="inline-block text-[11px] font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-2.5 py-0.5 rounded-full mb-3">
                      {item.tag}
                    </span>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <CarouselNavigation
            className="absolute -bottom-14 left-auto top-auto w-full justify-end gap-2"
            classNameButton="bg-zinc-900 *:stroke-zinc-50 dark:bg-zinc-100 dark:*:stroke-zinc-900"
            alwaysShow
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Journey;
