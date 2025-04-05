import apiClient from './apiClient';
import { Resume, ResumeSection, ApiResponse } from '../types';

// Resume APIs
export const getAllResumes = async (): Promise<ApiResponse<Resume[]>> => {
  try {
    const response = await apiClient.get<Resume[]>('/resumes');
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to fetch resumes',
    };
  }
};

export const uploadResume = async (formData: FormData): Promise<ApiResponse<Resume>> => {
  try {
    const response = await apiClient.post<Resume>('/upload-resume', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to upload resume',
    };
  }
};

export const getResumeById = async (resumeId: number): Promise<ApiResponse<Resume>> => {
  try {
    const response = await apiClient.get<Resume>(`/resumes/${resumeId}`);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to fetch resume',
    };
  }
};

export const deleteResume = async (resumeId: number): Promise<ApiResponse<null>> => {
  try {
    const response = await apiClient.delete(`/resumes/${resumeId}`);
    return { message: response.data?.message || 'Resume deleted successfully' };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to delete resume',
    };
  }
};

// Resume Sections APIs
export const getResumeSections = async (resumeId: number): Promise<ApiResponse<ResumeSection[]>> => {
  try {
    const response = await apiClient.get<ResumeSection[]>(`/resumes/${resumeId}/sections/`);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to fetch resume sections',
    };
  }
};

export const createResumeSection = async (
  resumeId: number, 
  sectionData: Partial<ResumeSection>
): Promise<ApiResponse<ResumeSection>> => {
  try {
    const response = await apiClient.post<ResumeSection>(`/resumes/${resumeId}/sections/`, sectionData);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to create resume section',
    };
  }
};

export const getResumeSection = async (sectionId: number): Promise<ApiResponse<ResumeSection>> => {
  try {
    const response = await apiClient.get<ResumeSection>(`/sections/${sectionId}`);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to fetch resume section',
    };
  }
};

export const updateResumeSection = async (
  sectionId: number, 
  sectionData: Partial<ResumeSection>
): Promise<ApiResponse<ResumeSection>> => {
  try {
    const response = await apiClient.put<ResumeSection>(`/sections/${sectionId}`, sectionData);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to update resume section',
    };
  }
};

export const enhanceResumeSection = async (sectionId: number): Promise<ApiResponse<ResumeSection>> => {
  try {
    const response = await apiClient.post<ResumeSection>(`/sections/${sectionId}/enhance/`);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to enhance resume section',
    };
  }
};

export const enhanceSectionWithJobDescription = async (
  sectionId: number, 
  jobDescription: string
): Promise<ApiResponse<ResumeSection>> => {
  try {
    const response = await apiClient.post<ResumeSection>(`/sections/${sectionId}/enhance-with-job/`, {
      job_description: jobDescription,
    });
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to enhance resume section with job description',
    };
  }
};

export const enhanceSectionWithJobUrl = async (
  sectionId: number, 
  jobUrl: string
): Promise<ApiResponse<ResumeSection>> => {
  try {
    const response = await apiClient.post<ResumeSection>(`/sections/${sectionId}/enhance-with-job-url/`, {
      job_url: jobUrl,
    });
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to enhance resume section with job URL',
    };
  }
};

export const makeSectionConcise = async (sectionId: number): Promise<ApiResponse<ResumeSection>> => {
  try {
    const response = await apiClient.post<ResumeSection>(`/sections/${sectionId}/make-concise/`);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to make resume section concise',
    };
  }
};
