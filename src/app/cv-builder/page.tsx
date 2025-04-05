'use client';

import React from 'react';
import { CVBuilderProvider } from '@/components/cv-builder/CVBuilderContext';
import EditorPanel from '@/components/cv-builder/EditorPanel';
import PDFPreview from '@/components/cv-builder/PDFPreview';

export default function CVBuilderPage() {
  return (
    <CVBuilderProvider>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        {/* Left: Editor */}
        <EditorPanel />
        
        {/* Right: Preview */}
        <PDFPreview />
      </div>
    </CVBuilderProvider>
  );
}
