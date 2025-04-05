'use client';

import React from 'react';
import { useCVBuilder } from '../CVBuilderContext';
import Section from './Section';
import Button from '@/components/ui/Button';

const EmploymentHistorySection: React.FC = () => {
  const { 
    cvData, 
    addEmploymentHistory, 
    updateEmploymentHistory, 
    removeEmploymentHistory 
  } = useCVBuilder();
  
  return (
    <Section 
      title="Employment History" 
      icon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      }
    >
      <div className="space-y-6">
        {cvData.employmentHistory.length === 0 ? (
          <div className="text-center py-4 bg-gray-50 rounded-md">
            <p className="text-gray-600 mb-3">No employment history added yet</p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={addEmploymentHistory}
              className="flex items-center mx-auto"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Add Job
            </Button>
          </div>
        ) : (
          cvData.employmentHistory.map((job, index) => (
            <div key={job.id} className="border border-gray-200 rounded-md p-4 relative">
              <button 
                onClick={() => removeEmploymentHistory(job.id)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                title="Remove job"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                  <input
                    type="text"
                    value={job.jobTitle}
                    onChange={(e) => updateEmploymentHistory(job.id, { jobTitle: e.target.value })}
                    className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                    placeholder="Your job title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Employer</label>
                  <input
                    type="text"
                    value={job.employer}
                    onChange={(e) => updateEmploymentHistory(job.id, { employer: e.target.value })}
                    className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    value={job.startDate}
                    onChange={(e) => updateEmploymentHistory(job.id, { startDate: e.target.value })}
                    className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <div className="flex items-center space-x-3">
                    <input
                      type="date"
                      value={job.endDate}
                      onChange={(e) => updateEmploymentHistory(job.id, { endDate: e.target.value })}
                      disabled={job.current}
                      className={`flex-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm ${job.current ? 'bg-gray-100' : ''}`}
                    />
                    <div className="flex items-center">
                      <input
                        id={`current-job-${job.id}`}
                        type="checkbox"
                        checked={job.current}
                        onChange={(e) => updateEmploymentHistory(job.id, { 
                          current: e.target.checked,
                          endDate: e.target.checked ? '' : job.endDate
                        })}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`current-job-${job.id}`} className="ml-2 text-sm text-gray-700">
                        Current
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={job.description}
                  onChange={(e) => updateEmploymentHistory(job.id, { description: e.target.value })}
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  placeholder="Describe your responsibilities and achievements..."
                  rows={4}
                />
              </div>
            </div>
          ))
        )}
        
        {cvData.employmentHistory.length > 0 && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={addEmploymentHistory}
            className="flex items-center mx-auto mt-2"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Add Another Job
          </Button>
        )}
      </div>
    </Section>
  );
};

export default EmploymentHistorySection;
