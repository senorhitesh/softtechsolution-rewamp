import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand2 mb-4">
            Node.js Development
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leverage the power of Node.js to build extremely fast, scalable, and real-time backend applications.
          </p>
        </div>

        <div className="bg-card shadow-lg rounded-2xl overflow-hidden border border-border">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Node.js?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-muted/30 p-4 rounded-xl border border-border technologycard">
                <h3 className="font-semibold text-lg text-brand2 mb-2 dhrandhar">Asynchronous I/O</h3>
                <p className="text-sm text-muted-foreground">Non-blocking architecture allows handling numerous connections simultaneously.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border border-border technologycard">
                <h3 className="font-semibold text-lg text-brand2 mb-2 dhrandhar">Unified Stack</h3>
                <p className="text-sm text-muted-foreground">Use JavaScript for both frontend and backend development for better team synergy.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border border-border technologycard">
                <h3 className="font-semibold text-lg text-brand2 mb-2 dhrandhar">Rich Ecosystem</h3>
                <p className="text-sm text-muted-foreground">Access to npm, the world's largest software registry of open-source libraries.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border border-border technologycard">
                <h3 className="font-semibold text-lg text-brand2 mb-2 dhrandhar">High Performance</h3>
                <p className="text-sm text-muted-foreground">Powered by Google's V8 engine, executing code with incredible speed.</p>
              </div>
            </div>
          </div>
          <div className="bg-brand2 p-6 md:p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-4">Ready to start your Node.js project?</h3>
            <button className="px-8 py-3 bg-white text-brand2 font-semibold rounded-full hover:bg-brand hover:text-white transition-colors duration-300 shadow-md">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
