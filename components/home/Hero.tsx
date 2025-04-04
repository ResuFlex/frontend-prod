"use client";

import { Button } from "../../UiKit/Button";

const Hero = () => {
  return (
    <section className="bg-primary-500 py-16">
      <div className="container px-4 max-w-2xl mx-auto">
        <span className="text-white text-6xl">
          Build your resume in minutes.
        </span>
        <p className="text-white text-lg mt-6">
          Only 2% of resumes win. Yours will be one of them. Let´s build you a
          resume that works.
        </p>
        <div className="mt-6 flex gap-6">
          <Button
            text="Create my Resume"
            onClick={() => {}}
            color="bg-theme-500"
          />
          <Button
            text="Upload my Resume"
            onClick={() => {}}
            color="bg-theme-500"
          />
        </div>
        <div className="mt-8 flex gap-8">
          <div className="flex flex-col border-r-1 pr-4">
            <span className="text-theme-secondary-500 text-4xl">30%</span>
            <span className="text-lg">Get more interviews</span>
          </div>
          <div className="flex flex-col">
            <span className="text-theme-secondary-500 text-4xl">30%</span>
            <span className="text-lg">Get more interviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
