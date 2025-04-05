'use client';

import React, { useState } from 'react';
import { ResumeSection } from '@/types';
import Button from '@/components/ui/Button';
import Alert from '@/components/ui/Alert';
import Spinner from '@/components/ui/Spinner';
import SectionEditForm from './SectionEditForm';
import { 
  enhanceResumeSection, 
  enhanceSectionWithJobDescription, 
  makeSectionConcise, 
  updateResumeSection 
} from '@/api/resumes';

interface SectionCardProps {
  section: ResumeSection;
  resumeId: number;
  onUpdate: (section: ResumeSection) => void;
  onDelete: (sectionId: number) => void;
}

const SectionCard: React.FC<SectionCardProps> = ({ section, resumeId, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [isMakingConcise, setIsMakingConcise] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [jobDescription, setJobDescription] = useState('');
  const [showJobDescriptionInput, setShowJobDescriptionInput] = useState(false);

  const handleEnhance = async () => {
    setError(null);
    setIsEnhancing(true);
    
    try {
      const response = await enhanceResumeSection(section.id);
      
      if (response.error) {
        setError(response.error);
      } else if (response.data) {
        onUpdate(response.data);
      }
    } catch (error) {
      setError('Failed to enhance section. Please try again.');
      console.error('Error enhancing section:', error);
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleMakeConcise = async () => {
    setError(null);
    setIsMakingConcise(true);
    
    try {
      const response = await makeSectionConcise(section.id);
      
      if (response.error) {
        setError(response.error);
      } else if (response.data) {
        onUpdate(response.data);
      }
    } catch (error) {
      setError('Failed to make section concise. Please try again.');
      console.error('Error making section concise:', error);
    } finally {
      setIsMakingConcise(false);
    }
  };

  const handleEnhanceWithJobDescription = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!jobDescription.trim()) {
      setError('Please enter a job description');
      return;
    }
    
    setError(null);
    setIsEnhancing(true);
    
    try {
      const response = await enhanceSectionWithJobDescription(section.id, jobDescription);
      
      if (response.error) {
        setError(response.error);
      } else if (response.data) {
        onUpdate(response.data);
        setShowJobDescriptionInput(false);
        setJobDescription('');
      }
    } catch (error) {
      setError('Failed to enhance section with job description. Please try again.');
      console.error('Error enhancing section with job description:', error);
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleSave = async (updatedSection: Partial<ResumeSection>) => {
    try {
      const response = await updateResumeSection(section.id, updatedSection);
      
      if (response.error) {
        setError(response.error);
        return false;
      } else if (response.data) {
        onUpdate(response.data);
        setIsEditing(false);
        return true;
      }
      
      return false;
    } catch (error) {
      setError('Failed to update section. Please try again.');
      console.error('Error updating section:', error);
      return false;
    }
  };

  return (
    <div className="p-6">
      {error && <Alert type="error" message={error} className="mb-4" />}
      
      {isEditing ? (
        <SectionEditForm 
          section={section} 
          onSave={handleSave} 
          onCancel={() => setIsEditing(false)} 
        />
      ) : (
        <>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              {section.title || `Section ${section.order_index + 1}`}
            </h3>
            
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="xs"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </Button>
            </div>
          </div>
          
          <div className="prose max-w-none mb-6">
            {section.content.split('\n').map((paragraph, index) => (
              <p key={index} className="my-2">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4 border-t pt-4">
            <Button
              variant="secondary"
              size="sm"
              onClick={handleEnhance}
              disabled={isEnhancing}
            >
              {isEnhancing ? <><Spinner size="xs" /> Enhancing...</> : 'Enhance Section'}
            </Button>
            
            <Button
              variant="secondary"
              size="sm"
              onClick={handleMakeConcise}
              disabled={isMakingConcise}
            >
              {isMakingConcise ? <><Spinner size="xs" /> Processing...</> : 'Make Concise'}
            </Button>
            
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setShowJobDescriptionInput(!showJobDescriptionInput)}
            >
              Enhance with Job Description
            </Button>
          </div>
          
          {showJobDescriptionInput && (
            <form onSubmit={handleEnhanceWithJobDescription} className="mt-4 bg-gray-50 p-4 rounded-md">
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Description
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  rows={4}
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste job description here..."
                  required
                />
              </div>
              
              <div className="flex gap-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  disabled={isEnhancing}
                >
                  {isEnhancing ? <><Spinner size="xs" /> Enhancing...</> : 'Apply'}
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setShowJobDescriptionInput(false);
                    setJobDescription('');
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default SectionCard;
