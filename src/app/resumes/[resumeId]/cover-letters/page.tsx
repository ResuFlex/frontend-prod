import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AppLayout from '@/components/layouts/AppLayout';
import CoverLetterList from '@/components/cover-letters/CoverLetterList';
import CoverLetterGenerateForm from '@/components/cover-letters/CoverLetterGenerateForm';
import { getResumeById } from '@/api/resumes';

interface CoverLettersPageProps {
  params: {
    resumeId: string;
  };
}

export async function generateMetadata({ params }: CoverLettersPageProps): Promise<Metadata> {
  const resumeId = parseInt(params.resumeId);
  
  if (isNaN(resumeId)) {
    return {
      title: 'Cover Letters - Resume Not Found',
    };
  }
  
  const response = await getResumeById(resumeId);
  
  if (!response.data) {
    return {
      title: 'Cover Letters - Resume Not Found',
    };
  }
  
  return {
    title: `Cover Letters for ${response.data.title || response.data.filename}`,
    description: `Generate and manage cover letters for your resume`,
  };
}

export default async function CoverLettersPage({ params }: CoverLettersPageProps) {
  const resumeId = parseInt(params.resumeId);
  
  if (isNaN(resumeId)) {
    notFound();
  }
  
  const response = await getResumeById(resumeId);
  
  if (!response.data) {
    notFound();
  }
  
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
          <div className="w-full md:w-2/3">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Cover Letters</h1>
            <p className="text-gray-600 mb-6">For resume: {response.data.title || response.data.filename}</p>
            
            <CoverLetterList resumeId={resumeId} />
          </div>
          
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow p-6 sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Generate New Cover Letter</h2>
            <CoverLetterGenerateForm resumeId={resumeId} />
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
