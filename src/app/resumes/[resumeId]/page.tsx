import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ResumeDetail from '@/components/resumes/ResumeDetail';
import AppLayout from '@/components/layouts/AppLayout';
import { getResumeById } from '@/api/resumes';

interface ResumePageProps {
  params: {
    resumeId: string;
  };
}

export async function generateMetadata({ params }: ResumePageProps): Promise<Metadata> {
  const resumeId = parseInt(params.resumeId);
  
  if (isNaN(resumeId)) {
    return {
      title: 'Resume Not Found',
    };
  }
  
  const response = await getResumeById(resumeId);
  
  if (!response.data) {
    return {
      title: 'Resume Not Found',
    };
  }
  
  return {
    title: `Resume: ${response.data.title || response.data.filename}`,
    description: `View and manage your resume: ${response.data.title || response.data.filename}`,
  };
}

export default async function ResumePage({ params }: ResumePageProps) {
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
      <div className="app-container">
        <div className="theme-card">
          <ResumeDetail resume={response.data} />
        </div>
      </div>
    </AppLayout>
  );
}
