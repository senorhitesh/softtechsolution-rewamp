import React from 'react';

const Page = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-brand2 mb-4">
            Laravel Development
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Leverage the power of Laravel to build elegant, robust, and scalable PHP web applications.
          </p>
        </div>

        <div className="bg-card shadow-lg rounded-2xl overflow-hidden border border-border">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose Laravel?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-muted/30 p-4 rounded-xl border border-border technologycard">
                <h3 className="font-semibold text-lg text-brand2 mb-2 dhrandhar">Elegant Syntax</h3>
                <p className="text-sm text-muted-foreground">Clean, readable code that makes development enjoyable and maintenance easier.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border border-border technologycard">
                <h3 className="font-semibold text-lg text-brand2 mb-2 dhrandhar">Built-in Security</h3>
                <p className="text-sm text-muted-foreground">Strong protection against common web vulnerabilities like SQL injection and XSS.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border border-border technologycard">
                <h3 className="font-semibold text-lg text-brand2 mb-2 dhrandhar">MVC Architecture</h3>
                <p className="text-sm text-muted-foreground">Clear separation of logic and presentation for better organized projects.</p>
              </div>
              <div className="bg-muted/30 p-4 rounded-xl border border-border technologycard">
                <h3 className="font-semibold text-lg text-brand2 mb-2 dhrandhar">Rich Ecosystem</h3>
                <p className="text-sm text-muted-foreground">Access to a wide array of official packages and community tools.</p>
              </div>
            </div>
          </div>
          <div className="bg-brand2 p-6 md:p-8 text-center text-white">
            <h3 className="text-xl font-bold mb-4">Ready to start your Laravel project?</h3>
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
