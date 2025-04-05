'use client';

import React from 'react';
import { useCVBuilder } from '../CVBuilderContext';
import Section from './Section';

const ProfessionalSummarySection: React.FC = () => {
  const { cvData, updateProfessionalSummary } = useCVBuilder();
  
  return (
    <Section 
      title="Professional Summary" 
      icon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
      }
    >
      <div>
        <textarea
          value={cvData.professionalSummary}
          onChange={(e) => updateProfessionalSummary(e.target.value)}
          className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
          placeholder="Write a professional summary highlighting your key qualifications, experience, and career goals..."
          rows={5}
        />
        <p className="text-xs text-gray-500 mt-1">
          A compelling professional summary helps you make a strong first impression.
        </p>
      </div>
    </Section>
  );
};

export default ProfessionalSummarySection;
