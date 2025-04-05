import apiClient from './apiClient';
import { CoverLetter, ApiResponse } from '../types';

export const generateCoverLetter = async (
  resumeId: number, 
  coverLetterData: Partial<CoverLetter>
): Promise<ApiResponse<CoverLetter>> => {
  try {
    const response = await apiClient.post<CoverLetter>(`/cover-letters/generate/${resumeId}`, coverLetterData);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to generate cover letter',
    };
  }
};

export const getCoverLetter = async (coverLetterId: number): Promise<ApiResponse<CoverLetter>> => {
  try {
    const response = await apiClient.get<CoverLetter>(`/cover-letters/${coverLetterId}`);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to fetch cover letter',
    };
  }
};

export const updateCoverLetter = async (
  coverLetterId: number, 
  coverLetterData: Partial<CoverLetter>
): Promise<ApiResponse<CoverLetter>> => {
  try {
    const response = await apiClient.put<CoverLetter>(`/cover-letters/${coverLetterId}`, coverLetterData);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to update cover letter',
    };
  }
};

export const deleteCoverLetter = async (coverLetterId: number): Promise<ApiResponse<null>> => {
  try {
    const response = await apiClient.delete(`/cover-letters/${coverLetterId}`);
    return { message: response.data?.message || 'Cover letter deleted successfully' };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to delete cover letter',
    };
  }
};

export const exportCoverLetterToPdf = async (
  coverLetterId: number, 
  templateOptions: any
): Promise<ApiResponse<any>> => {
  try {
    const response = await apiClient.post(`/cover-letters/${coverLetterId}/export-pdf`, templateOptions);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to export cover letter to PDF',
    };
  }
};

export const getCoverLettersByResumeId = async (resumeId: number): Promise<ApiResponse<CoverLetter[]>> => {
  try {
    const response = await apiClient.get<CoverLetter[]>(`/resumes/cover-letters/${resumeId}/cover-letters`);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to fetch cover letters',
    };
  }
};

export const createCoverLetterByResumeId = async (
  resumeId: number, 
  coverLetterData: Partial<CoverLetter>
): Promise<ApiResponse<CoverLetter>> => {
  try {
    const response = await apiClient.post<CoverLetter>(`/resumes/cover-letters/${resumeId}/cover-letters`, coverLetterData);
    return { data: response.data };
  } catch (error: any) {
    return { 
      error: error.response?.data?.message || 'Failed to create cover letter',
    };
  }
};
