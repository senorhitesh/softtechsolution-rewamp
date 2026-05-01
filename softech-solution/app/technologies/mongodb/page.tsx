import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand2 mb-4">
            MongoDB Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leverage the power of MongoDB to build highly flexible, scalable, and performance-driven NoSQL database solutions.
          </p>
        </div>

        <div className="bg-card shadow-lg rounded-2xl overflow-hidden border border-border">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose MongoDB?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-muted/30 p-4 rounded-xl border border-border technologycard">
                <h3 className="font-semibold text-lg text-brand2 mb-2 dhrandhar">Flexible Schema</h3>
                <p className="text-sm text-muted-foreground">Adapt to changing business requirements without costly database migrations.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border border-border technologycard">
                <h3 className="font-semibold text-lg text-brand2 mb-2 dhrandhar">High Scalability</h3>
                <p className="text-sm text-muted-foreground">Built-in sharding allows horizontal scaling to handle massive volumes of data.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border border-border technologycard">
                <h3 className="font-semibold text-lg text-brand2 mb-2 dhrandhar">Fast Performance</h3>
                <p className="text-sm text-muted-foreground">Document-oriented storage ensures quick data retrieval and processing.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border border-border technologycard">
                <h3 className="font-semibold text-lg text-brand2 mb-2 dhrandhar">Cloud Ready</h3>
                <p className="text-sm text-muted-foreground">Seamlessly integrate with modern cloud infrastructures and microservices.</p>
              </div>
            </div>
          </div>
          <div className="bg-brand2 p-6 md:p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-4">Ready to optimize your data with MongoDB?</h3>
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
