'use client';

import React from 'react';
import { useCVBuilder } from '../CVBuilderContext';
import Section from './Section';
import Button from '@/components/ui/Button';

const SocialLinksSection: React.FC = () => {
  const { 
    cvData, 
    addSocialLink, 
    updateSocialLink, 
    removeSocialLink 
  } = useCVBuilder();
  
  const platformOptions = [
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'github', label: 'GitHub' },
    { value: 'portfolio', label: 'Portfolio Website' },
    { value: 'twitter', label: 'Twitter' },
    { value: 'other', label: 'Other' },
  ];
  
  return (
    <Section 
      title="Websites & Social Links" 
      icon={
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
        </svg>
      }
    >
      <div className="space-y-4">
        {cvData.socialLinks.length === 0 ? (
          <div className="text-center py-4 bg-gray-50 rounded-md">
            <p className="text-gray-600 mb-3">No links added yet</p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={addSocialLink}
              className="flex items-center mx-auto"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
              Add Link
            </Button>
          </div>
        ) : (
          cvData.socialLinks.map((link) => (
            <div key={link.id} className="flex items-center space-x-4">
              <div className="w-1/3">
                <select
                  value={link.platform}
                  onChange={(e) => updateSocialLink(link.id, { platform: e.target.value })}
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                >
                  <option value="">Select platform</option>
                  {platformOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <input
                  type="url"
                  value={link.url}
                  onChange={(e) => updateSocialLink(link.id, { url: e.target.value })}
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  placeholder="https://"
                />
              </div>
              <button 
                onClick={() => removeSocialLink(link.id)}
                className="text-gray-400 hover:text-red-500 p-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </button>
            </div>
          ))
        )}
        
        {cvData.socialLinks.length > 0 && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={addSocialLink}
            className="flex items-center mt-2"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Add Another Link
          </Button>
        )}
      </div>
    </Section>
  );
};

export default SocialLinksSection;
