'use client';

import React, { useState } from 'react';
import { ResumeSection } from '@/types';
import Button from '@/components/ui/Button';
import Spinner from '@/components/ui/Spinner';

interface SectionEditFormProps {
  section: ResumeSection;
  onSave: (section: Partial<ResumeSection>) => Promise<boolean>;
  onCancel: () => void;
}

const SectionEditForm: React.FC<SectionEditFormProps> = ({ section, onSave, onCancel }) => {
  const [title, setTitle] = useState(section.title || '');
  const [content, setContent] = useState(section.content || '');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLoading(true);
    
    const success = await onSave({
      title,
      content,
    });
    
    if (!success) {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Section Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Enter section title"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Content
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary-500"
          rows={8}
          placeholder="Enter section content"
        />
      </div>
      
      <div className="flex justify-end space-x-2">
        <Button
          type="button"
          variant="outline"
          disabled={isLoading}
          onClick={onCancel}
        >
          Cancel
        </Button>
        
        <Button
          type="submit"
          variant="primary"
          disabled={isLoading}
        >
          {isLoading ? <><Spinner size="xs" /> Saving...</> : 'Save Changes'}
        </Button>
      </div>
    </form>
  );
};

export default SectionEditForm;
