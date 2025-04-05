import { useRouter } from 'next/navigation';

/**
 * Hook for navigating in React components
 */
export const useNavigation = () => {
  const router = useRouter();
  
  return {
    navigate: (url: string) => {
      try {
        if (!url) return false;
        
        // Handle external URLs
        if (url.match(/^https?:\/\//)) {
          if (typeof window !== 'undefined') {
            window.open(url, '_blank', 'noopener,noreferrer');
          }
          return true;
        }
        
        // For internal navigation, use simple redirection
        // This avoids the symlink error issues
        if (typeof window !== 'undefined') {
          window.location.href = url;
          return true;
        }
        
        return false;
      } catch (error) {
        console.error('Navigation error:', error);
        return false;
      }
    },
    replace: (url: string) => {
      try {
        if (!url) return false;
        
        if (typeof window !== 'undefined') {
          window.location.replace(url);
          return true;
        }
        
        return false;
      } catch (error) {
        console.error('Navigation replace error:', error);
        return false;
      }
    }
  };
};

/**
 * Simple navigation function for non-component code
 */
export const safeNavigate = (url: string): boolean => {
  try {
    if (!url) return false;
    
    if (typeof window !== 'undefined') {
      if (url.match(/^https?:\/\//)) {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = url;
      }
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Navigation error:', error);
    return false;
  }
};
