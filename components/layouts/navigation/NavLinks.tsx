"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import MegaDropdown from "./MegaDropdown";
import ResumeMegaDropdown from "./ResumeMegaDropdown";

const NavLinks: React.FC = () => {
  const [isFeatureOpen, setIsFeatureOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const featureDropdownRef = useRef<HTMLDivElement>(null);
  const resumeDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        featureDropdownRef.current && 
        !featureDropdownRef.current.contains(event.target as Node)
      ) {
        setIsFeatureOpen(false);
      }
      
      if (
        resumeDropdownRef.current && 
        !resumeDropdownRef.current.contains(event.target as Node)
      ) {
        setIsResumeOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="hidden md:flex items-center space-x-1">
      {/* Features with dropdown */}
      <div className="relative" ref={featureDropdownRef}>
        <button 
          className="flex items-center text-white px-4 py-2 rounded-md hover:bg-hover-100 font-medium text-sm transition-colors duration-200"
          onClick={() => {
            setIsFeatureOpen(!isFeatureOpen);
            setIsResumeOpen(false);
          }}
          onMouseEnter={() => {
            setIsFeatureOpen(true);
            setIsResumeOpen(false);
          }}
        >
          Features
          <span className="ml-2 bg-theme-500 text-black text-xs px-2 py-0.5 rounded-full">NEW</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        {isFeatureOpen && <MegaDropdown />}
      </div>
      
      {/* Resume with dropdown */}
      <div className="relative" ref={resumeDropdownRef}>
        <button
          className="flex items-center text-white px-4 py-2 rounded-md hover:bg-hover-100 font-medium text-sm transition-colors duration-200"
          onClick={() => {
            setIsResumeOpen(!isResumeOpen);
            setIsFeatureOpen(false);
          }}
          onMouseEnter={() => {
            setIsResumeOpen(true);
            setIsFeatureOpen(false);
          }}
        >
          Resume
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        {isResumeOpen && <ResumeMegaDropdown />}
      </div>
      
      {/* Other Navigation Items */}
      <Link href="/cover-letter" className="text-white hover:bg-hover-100 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
        Cover Letter
      </Link>
      <Link href="/pricing" className="text-white hover:bg-hover-100 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
        Pricing
      </Link>
    </div>
  );
};

export default NavLinks;
