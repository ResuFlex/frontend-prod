import React from 'react';
import { Metadata } from 'next';
import ResumeList from '@/components/resumes/ResumeList';
import ResumeUploadForm from '@/components/resumes/ResumeUploadForm';
import AppLayout from '@/components/layouts/AppLayout';

export const metadata: Metadata = {
  title: 'My Resumes',
  description: 'View and manage your resumes',
};

export default function ResumesPage() {
  return (
    <AppLayout>
      <div className="app-container">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="w-full md:w-2/3">
            <h1 className="page-title mb-6">My Resumes</h1>
            <ResumeList />
          </div>
          
          <div className="w-full md:w-1/3">
            <div className="theme-card">
              <h2 className="card-title">Upload New Resume</h2>
              <ResumeUploadForm />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
