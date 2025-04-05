'use client';

import React, { useState, ReactNode } from 'react';

interface SectionProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow p-4 my-4">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex items-center">
          {icon && <span className="mr-2 text-gray-600">{icon}</span>}
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          {isCollapsed ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
            </svg>
          )}
        </button>
      </div>
      
      {!isCollapsed && (
        <div className="mt-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default Section;
