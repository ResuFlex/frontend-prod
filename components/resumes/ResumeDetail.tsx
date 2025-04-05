'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Resume, ResumeSection } from '@/types';
import { getResumeSections, deleteResume } from '@/api/resumes';
import Button from '@/components/ui/Button';
import Alert from '@/components/ui/Alert';
import Spinner from '@/components/ui/Spinner';
import SectionList from './sections/SectionList';
import { safeNavigate } from '@/utils/navigation';

interface ResumeDetailProps {
  resume: Resume;
}

const ResumeDetail: React.FC<ResumeDetailProps> = ({ resume }) => {
  const [sections, setSections] = useState<ResumeSection[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const response = await getResumeSections(resume.id);
        
        if (response.error) {
          setError(response.error);
        } else if (response.data) {
          // Sort sections by order_index
          const sortedSections = [...response.data].sort((a, b) => a.order_index - b.order_index);
          setSections(sortedSections);
        }
      } catch (error) {
        setError('Failed to load resume sections. Please try again.');
        console.error('Error fetching resume sections:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSections();
  }, [resume.id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this resume? This action cannot be undone.')) {
      try {
        const response = await deleteResume(resume.id);
        
        if (response.error) {
          setError(response.error);
        } else {
          safeNavigate('/resumes');
        }
      } catch (error) {
        setError('Failed to delete resume. Please try again.');
        console.error('Error deleting resume:', error);
      }
    }
  };

  return (
    <div>
      {error && <Alert type="error" message={error} className="mb-4" />}
      
      <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {resume.title || resume.filename}
          </h1>
          <p className="text-gray-600">
            Uploaded on {new Date(resume.uploaded_at).toLocaleDateString()}
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href={`/resumes`} passHref>
            <Button variant="outline" size="sm">
              Back to Resumes
            </Button>
          </Link>
          
          <Link href={`/resumes/${resume.id}/cover-letters`} passHref>
            <Button variant="primary" size="sm">
              Generate Cover Letters
            </Button>
          </Link>
          
          <Button
            variant="danger"
            size="sm"
            onClick={handleDelete}
          >
            Delete Resume
          </Button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Spinner size="lg" />
          </div>
        ) : (
          <SectionList sections={sections} resumeId={resume.id} onSectionsChange={setSections} />
        )}
      </div>
    </div>
  );
};

export default ResumeDetail;
