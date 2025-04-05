import React from 'react';
import Link from 'next/link';
import { Resume } from '@/types';
import Button from '@/components/ui/Button';

interface ResumeCardProps {
  resume: Resume;
  onDelete: (resumeId: number) => void;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ resume, onDelete }) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to delete this resume?')) {
      onDelete(resume.id);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden border border-border-500">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {resume.title || resume.filename}
            </h3>
            <p className="text-sm text-gray-500">
              Uploaded on {new Date(resume.uploaded_at).toLocaleDateString()}
            </p>
          </div>
          <div className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
            {resume.processed ? 'Processed' : 'Processing...'}
          </div>
        </div>
      </div>
      <div className="px-5 pb-5 flex justify-between border-t border-border-500 pt-4">
        <div>
          <Link href={`/dashboard/resumes/${resume.id}`} passHref>
            <Button variant="outline" size="sm" className="mr-2">
              View
            </Button>
          </Link>
          <Link href={`/dashboard/resumes/${resume.id}/edit`} passHref>
            <Button size="sm" variant="outline" className="mr-2">
              Edit
            </Button>
          </Link>
        </div>
        <Button
          variant="danger"
          size="sm"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default ResumeCard;
