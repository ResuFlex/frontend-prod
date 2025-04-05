'use client';

import React from 'react';
import { useCVBuilder } from './CVBuilderContext';
import ProgressBar from './ProgressBar';
import PersonalDetailsSection from './sections/PersonalDetailsSection';
import ProfessionalSummarySection from './sections/ProfessionalSummarySection';
import EmploymentHistorySection from './sections/EmploymentHistorySection';
import EducationSection from './sections/EducationSection';
import SocialLinksSection from './sections/SocialLinksSection';
import Button from '@/components/ui/Button';

const EditorPanel: React.FC = () => {
  const { getCompletionPercentage } = useCVBuilder();

  return (
    <div className="bg-gray-50 h-screen overflow-y-auto p-4 md:p-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">CV Builder</h1>
          <p className="text-gray-600 mb-4">
            Complete the sections below to create your professional CV
          </p>
          <ProgressBar percentage={getCompletionPercentage()} />
        </header>

        <div className="space-y-6">
          <PersonalDetailsSection />
          <ProfessionalSummarySection />
          <EmploymentHistorySection />
          <EducationSection />
          <SocialLinksSection />

          <div className="pt-4 border-t border-gray-200">
            <Button 
              variant="primary" 
              className="w-full"
              onClick={() => alert('AI improvement feature coming soon!')}
            >
              <span className="flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                Improve CV with AI
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPanel;
