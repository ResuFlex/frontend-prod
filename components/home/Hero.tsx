"use client";

import { Button } from "../../UiKit/Button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-primary-500 py-20 md:py-24 relative overflow-hidden">
      {/* Background design elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-theme-500/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-theme-secondary-500/10 blur-3xl"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left column: Text content */}
          <div className={`lg:w-1/2 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build your <span className="text-theme-500">professional resume</span> in minutes.
            </h1>
            <p className="text-light-600 text-lg md:text-xl mt-6">
              Only 2% of resumes make it past the first round. Ensure yours is one of them with our expert-designed templates.
            </p>
            
            <div className="mt-8 md:mt-10 flex flex-wrap gap-4">
              <Button
                text="Create my Resume"
                onClick={() => {}}
                variant="primary"
                className="bg-theme-500 hover:bg-theme-600 text-primary-500 font-medium px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
              />
              <Button
                text="Upload my Resume"
                onClick={() => {}}
                variant="outline"
                className="bg-transparent text-white border-2 border-white/30 font-medium px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300"
              />
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div className="flex flex-col">
                <span className="text-theme-secondary-500 text-3xl md:text-4xl font-bold">30%</span>
                <span className="text-white text-base md:text-lg">More interviews</span>
              </div>
              <div className="flex flex-col">
                <span className="text-theme-secondary-500 text-3xl md:text-4xl font-bold">65%</span>
                <span className="text-white text-base md:text-lg">Faster job search</span>
              </div>
              <div className="flex flex-col">
                <span className="text-theme-secondary-500 text-3xl md:text-4xl font-bold">80%</span>
                <span className="text-white text-base md:text-lg">Higher success rate</span>
              </div>
            </div>
            
            <div className="mt-10 flex items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-primary-500 flex items-center justify-center text-xs text-primary-500" style={{ 
                    backgroundColor: i % 2 ? 'var(--color-theme-500)' : 'var(--color-theme-secondary-500)'
                  }}>
                    {i}
                  </div>
                ))}
              </div>
              <p className="ml-4 text-light-600">Trusted by thousands of job seekers</p>
            </div>
          </div>
          
          {/* Right column: Image */}
          <div className={`lg:w-1/2 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative">
              {/* Resume mockup */}
              <div className="bg-light-500 rounded-lg shadow-2xl p-6 transform rotate-3 transition-transform hover:rotate-0 duration-500">
                <div className="bg-primary-600 h-24 rounded-md mb-4"></div>
                <div className="flex gap-4">
                  <div className="w-1/3">
                    <div className="bg-theme-500/20 h-40 rounded-md mb-3"></div>
                    <div className="bg-theme-secondary-500/20 h-24 rounded-md mb-3"></div>
                    <div className="bg-theme-500/20 h-20 rounded-md"></div>
                  </div>
                  <div className="w-2/3">
                    <div className="bg-primary-600/10 h-8 rounded-md mb-3"></div>
                    <div className="bg-primary-600/10 h-4 rounded-md mb-2"></div>
                    <div className="bg-primary-600/10 h-4 rounded-md mb-2"></div>
                    <div className="bg-primary-600/10 h-4 rounded-md mb-6"></div>
                    <div className="bg-theme-secondary-500/20 h-24 rounded-md mb-3"></div>
                    <div className="bg-theme-500/20 h-20 rounded-md"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-theme-500 opacity-20 blur-md z-[-1]"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-theme-secondary-500 opacity-20 blur-md z-[-1]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
