'use client';

import React from 'react';
import { useCVBuilder } from './CVBuilderContext';
import Button from '@/components/ui/Button';

const PDFPreview: React.FC = () => {
  const { cvData } = useCVBuilder();
  const { personalDetails, professionalSummary, employmentHistory, education, socialLinks } = cvData;
  
  // Function to handle PDF download (mock implementation)
  const handleDownload = () => {
    alert('Download functionality would be implemented with a backend API or client-side PDF generation library');
  };
  
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="bg-gray-100 p-4 h-screen overflow-auto flex flex-col">
      <div className="flex justify-between items-center mb-4 px-4">
        <h2 className="font-semibold text-gray-700">Preview</h2>
        <Button 
          variant="primary" 
          size="sm" 
          onClick={handleDownload}
        >
          Download PDF
        </Button>
      </div>
      
      <div className="bg-white w-full md:w-[90%] mx-auto p-6 rounded shadow flex-grow">
        {/* Header with Name */}
        <div className="border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 uppercase">
            {personalDetails.firstName} {personalDetails.lastName}
          </h1>
          
          {/* Contact Details */}
          <div className="flex flex-wrap text-sm text-gray-600 mt-2">
            {personalDetails.email && (
              <div className="mr-4 mb-1">
                <span className="font-semibold">Email:</span> {personalDetails.email}
              </div>
            )}
            {personalDetails.phone && (
              <div className="mr-4 mb-1">
                <span className="font-semibold">Phone:</span> {personalDetails.phone}
              </div>
            )}
            {(personalDetails.city || personalDetails.country) && (
              <div className="mr-4 mb-1">
                <span className="font-semibold">Location:</span>{' '}
                {[personalDetails.city, personalDetails.country]
                  .filter(Boolean)
                  .join(', ')}
              </div>
            )}
          </div>
          
          {/* Social Links */}
          {socialLinks.length > 0 && (
            <div className="flex flex-wrap text-sm text-blue-600 mt-2">
              {socialLinks.map((link) => (
                link.url && (
                  <div key={link.id} className="mr-4 mb-1">
                    <span className="font-semibold">{link.platform}:</span> {link.url}
                  </div>
                )
              ))}
            </div>
          )}
        </div>
        
        {/* Professional Summary */}
        {professionalSummary && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2 uppercase">
              Professional Summary
            </h2>
            <p className="text-sm text-gray-700">{professionalSummary}</p>
          </div>
        )}
        
        {/* Employment History */}
        {employmentHistory.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 uppercase">
              Employment History
            </h2>
            <div className="space-y-4">
              {employmentHistory.map((job) => (
                <div key={job.id} className="border-l-2 border-gray-200 pl-4 ml-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-800">{job.jobTitle}</h3>
                    <div className="text-sm text-gray-500">
                      {formatDate(job.startDate)} — {job.current ? 'Present' : formatDate(job.endDate)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{job.employer}</p>
                  <p className="text-sm text-gray-700">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Education */}
        {education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 uppercase">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="border-l-2 border-gray-200 pl-4 ml-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                    <div className="text-sm text-gray-500">
                      {formatDate(edu.startDate)} — {edu.current ? 'Present' : formatDate(edu.endDate)}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{edu.institution}</p>
                  <p className="text-sm text-gray-700">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFPreview;
