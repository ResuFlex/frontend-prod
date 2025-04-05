// API configuration
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api';

// Auth related constants
export const TOKEN_EXPIRY_DAYS = 7;
export const MIN_PASSWORD_LENGTH = 8;

// Resume related constants
export const MAX_RESUME_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const SUPPORTED_RESUME_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

// UI constants
export const MAX_MOBILE_WIDTH = 768; // px
export const ANIMATION_DURATION = 300; // ms
export const DEBOUNCE_DELAY = 300; // ms
