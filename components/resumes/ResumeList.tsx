'use client';

import React, { useState, useEffect } from 'react';
import { Resume } from '@/types';
import ResumeCard from './ResumeCard';
import { getAllResumes, deleteResume } from '@/api/resumes';
import Alert from '@/components/ui/Alert';
import Spinner from '@/components/ui/Spinner';

const ResumeList: React.FC = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchResumes = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await getAllResumes();
      
      if (response.error) {
        setError(response.error);
      } else if (response.data) {
        setResumes(response.data);
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again later.');
      console.error('Error fetching resumes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResumes();
  }, []);

  const handleDelete = async (resumeId: number) => {
    try {
      const response = await deleteResume(resumeId);
      
      if (response.error) {
        setError(response.error);
      } else {
        // Remove the deleted resume from the list
        setResumes(resumes.filter(resume => resume.id !== resumeId));
      }
    } catch (error) {
      setError('Failed to delete resume. Please try again.');
      console.error('Error deleting resume:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error) {
    return <Alert type="error" message={error} className="mb-4" />;
  }

  if (resumes.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-2">No resumes found</h3>
        <p className="text-gray-600">Upload your first resume to get started.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {resumes.map(resume => (
        <ResumeCard 
          key={resume.id} 
          resume={resume} 
          onDelete={handleDelete} 
        />
      ))}
    </div>
  );
};

export default ResumeList;
