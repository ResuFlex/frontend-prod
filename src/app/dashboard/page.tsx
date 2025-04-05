import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import AppLayout from '@/components/layouts/AppLayout';
import { getAllResumes } from '@/api/resumes';
import ResumeList from '@/components/resumes/ResumeList';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Your ResumeAI Dashboard',
};

export default async function DashboardPage() {
  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <DashboardCard 
            title="Resumes" 
            description="Upload and manage your resumes"
            linkText="View Resumes"
            linkHref="/resumes"
            iconPath="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
          
          <DashboardCard 
            title="Cover Letters" 
            description="Generate personalized cover letters"
            linkText="Create Cover Letter"
            linkHref="/resumes"
            iconPath="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
          
          <DashboardCard 
            title="Profile" 
            description="View and update your profile information"
            linkText="Manage Profile"
            linkHref="/profile"
            iconPath="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900">Recent Resumes</h2>
              <Link href="/resumes" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                View All
              </Link>
            </div>
          </div>
          
          <ResumeList />
        </div>
      </div>
    </AppLayout>
  );
}

interface DashboardCardProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  iconPath: string;
}

function DashboardCard({ title, description, linkText, linkHref, iconPath }: DashboardCardProps) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="rounded-full bg-primary-100 p-3 mr-4">
            <svg className="h-6 w-6 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPath} />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={linkHref} className="text-primary-600 hover:text-primary-700 font-medium">
          {linkText} →
        </Link>
      </div>
    </div>
  );
}
