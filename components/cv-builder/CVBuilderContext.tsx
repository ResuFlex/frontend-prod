'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Define types for CV data
export interface PersonalDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface EmploymentHistory {
  id: string;
  jobTitle: string;
  employer: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
}

export interface CVData {
  personalDetails: PersonalDetails;
  professionalSummary: string;
  employmentHistory: EmploymentHistory[];
  education: Education[];
  socialLinks: SocialLink[];
}

// Initial data structure
const initialCVData: CVData = {
  personalDetails: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  },
  professionalSummary: '',
  employmentHistory: [],
  education: [],
  socialLinks: [],
};

// Define context type
interface CVBuilderContextType {
  cvData: CVData;
  updatePersonalDetails: (details: Partial<PersonalDetails>) => void;
  updateProfessionalSummary: (summary: string) => void;
  addEmploymentHistory: () => void;
  updateEmploymentHistory: (id: string, employment: Partial<EmploymentHistory>) => void;
  removeEmploymentHistory: (id: string) => void;
  addEducation: () => void;
  updateEducation: (id: string, education: Partial<Education>) => void;
  removeEducation: (id: string) => void;
  addSocialLink: () => void;
  updateSocialLink: (id: string, link: Partial<SocialLink>) => void;
  removeSocialLink: (id: string) => void;
  getCompletionPercentage: () => number;
}

// Create context
const CVBuilderContext = createContext<CVBuilderContextType | undefined>(undefined);

// Custom hook to use the context
export function useCVBuilder() {
  const context = useContext(CVBuilderContext);
  if (context === undefined) {
    throw new Error('useCVBuilder must be used within a CVBuilderProvider');
  }
  return context;
}

// Provider component
export const CVBuilderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to load from localStorage or use initial data
  const [cvData, setCVData] = useState<CVData>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cv-builder-data');
      return saved ? JSON.parse(saved) : initialCVData;
    }
    return initialCVData;
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cv-builder-data', JSON.stringify(cvData));
    }
  }, [cvData]);

  // Update personal details
  const updatePersonalDetails = (details: Partial<PersonalDetails>) => {
    setCVData(prev => ({
      ...prev,
      personalDetails: {
        ...prev.personalDetails,
        ...details,
      },
    }));
  };

  // Update professional summary
  const updateProfessionalSummary = (summary: string) => {
    setCVData(prev => ({
      ...prev,
      professionalSummary: summary,
    }));
  };

  // Add a new employment history entry
  const addEmploymentHistory = () => {
    const newEmployment: EmploymentHistory = {
      id: uuidv4(),
      jobTitle: '',
      employer: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    };
    setCVData(prev => ({
      ...prev,
      employmentHistory: [...prev.employmentHistory, newEmployment],
    }));
  };

  // Update an employment history entry
  const updateEmploymentHistory = (id: string, employment: Partial<EmploymentHistory>) => {
    setCVData(prev => ({
      ...prev,
      employmentHistory: prev.employmentHistory.map(item =>
        item.id === id ? { ...item, ...employment } : item
      ),
    }));
  };

  // Remove an employment history entry
  const removeEmploymentHistory = (id: string) => {
    setCVData(prev => ({
      ...prev,
      employmentHistory: prev.employmentHistory.filter(item => item.id !== id),
    }));
  };

  // Add a new education entry
  const addEducation = () => {
    const newEducation: Education = {
      id: uuidv4(),
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
    };
    setCVData(prev => ({
      ...prev,
      education: [...prev.education, newEducation],
    }));
  };

  // Update an education entry
  const updateEducation = (id: string, education: Partial<Education>) => {
    setCVData(prev => ({
      ...prev,
      education: prev.education.map(item =>
        item.id === id ? { ...item, ...education } : item
      ),
    }));
  };

  // Remove an education entry
  const removeEducation = (id: string) => {
    setCVData(prev => ({
      ...prev,
      education: prev.education.filter(item => item.id !== id),
    }));
  };

  // Add a new social link
  const addSocialLink = () => {
    const newLink: SocialLink = {
      id: uuidv4(),
      platform: '',
      url: '',
    };
    setCVData(prev => ({
      ...prev,
      socialLinks: [...prev.socialLinks, newLink],
    }));
  };

  // Update a social link
  const updateSocialLink = (id: string, link: Partial<SocialLink>) => {
    setCVData(prev => ({
      ...prev,
      socialLinks: prev.socialLinks.map(item =>
        item.id === id ? { ...item, ...link } : item
      ),
    }));
  };

  // Remove a social link
  const removeSocialLink = (id: string) => {
    setCVData(prev => ({
      ...prev,
      socialLinks: prev.socialLinks.filter(item => item.id !== id),
    }));
  };

  // Calculate completion percentage
  const getCompletionPercentage = (): number => {
    let totalFields = 0;
    let filledFields = 0;

    // Check personal details
    const personalDetailsFields = Object.values(cvData.personalDetails);
    totalFields += personalDetailsFields.length;
    filledFields += personalDetailsFields.filter(value => !!value).length;

    // Check professional summary
    totalFields += 1;
    if (cvData.professionalSummary) filledFields += 1;

    // Check employment history
    cvData.employmentHistory.forEach(job => {
      const jobFields = Object.values(job).filter(key => key !== 'id' && key !== 'current');
      totalFields += jobFields.length;
      filledFields += jobFields.filter(value => !!value).length;
    });

    // Check education
    cvData.education.forEach(edu => {
      const eduFields = Object.values(edu).filter(key => key !== 'id' && key !== 'current');
      totalFields += eduFields.length;
      filledFields += eduFields.filter(value => !!value).length;
    });

    // Check social links
    cvData.socialLinks.forEach(link => {
      const linkFields = Object.values(link).filter(key => key !== 'id');
      totalFields += linkFields.length;
      filledFields += linkFields.filter(value => !!value).length;
    });

    return totalFields ? Math.round((filledFields / totalFields) * 100) : 0;
  };

  const value = {
    cvData,
    updatePersonalDetails,
    updateProfessionalSummary,
    addEmploymentHistory,
    updateEmploymentHistory,
    removeEmploymentHistory,
    addEducation,
    updateEducation,
    removeEducation,
    addSocialLink,
    updateSocialLink,
    removeSocialLink,
    getCompletionPercentage,
  };

  return <CVBuilderContext.Provider value={value}>{children}</CVBuilderContext.Provider>;
};
