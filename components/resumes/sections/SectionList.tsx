import React from 'react';
import { ResumeSection } from '@/types';
import SectionCard from './SectionCard';

interface SectionListProps {
  sections: ResumeSection[];
  resumeId: number;
  onSectionsChange: (sections: ResumeSection[]) => void;
}

const SectionList: React.FC<SectionListProps> = ({ sections, resumeId, onSectionsChange }) => {
  if (sections.length === 0) {
    return (
      <div className="p-8 text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-2">No sections found</h3>
        <p className="text-gray-600">This resume doesn't have any sections yet.</p>
      </div>
    );
  }

  const updateSection = (updatedSection: ResumeSection) => {
    const newSections = sections.map(section => 
      section.id === updatedSection.id ? updatedSection : section
    );
    onSectionsChange(newSections);
  };

  const deleteSection = (sectionId: number) => {
    const newSections = sections.filter(section => section.id !== sectionId);
    onSectionsChange(newSections);
  };

  return (
    <div className="divide-y divide-gray-200">
      {sections.map(section => (
        <SectionCard
          key={section.id}
          section={section}
          resumeId={resumeId}
          onUpdate={updateSection}
          onDelete={deleteSection}
        />
      ))}
    </div>
  );
};

export default SectionList;
