import React from "react";
import Link from "next/link";

interface ResumeExamplesColumnProps {
  viewAllLink?: string;
}

const ResumeExamplesColumn: React.FC<ResumeExamplesColumnProps> = ({ viewAllLink = "#" }) => {
  const examples = [
    "Software Engineering",
    "Engineering",
    "Back-End Developer / Engineer",
    "Student Internship",
    "Business",
    "Healthcare"
  ];

  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-4 text-base">Resume Examples</h3>
      <ul className="space-y-3">
        {examples.map((category, index) => (
          <li key={index}>
            <Link 
              href="#" 
              className="text-sm text-gray-600 hover:text-primary-500 transition-colors flex items-center"
            >
              <svg className="w-4 h-4 mr-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              {category}
            </Link>
          </li>
        ))}
      </ul>
      <Link 
        href={viewAllLink} 
        className="inline-flex items-center mt-6 text-sm font-medium text-primary-500 hover:text-primary-600 transition-colors"
      >
        View all examples
        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  );
};

export default ResumeExamplesColumn;
