import React, { ReactNode } from 'react';
import Link from 'next/link';

interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  error?: string;
  logo?: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle, error, logo }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        {logo ? (
          <div className="mx-auto mb-6">{logo}</div>
        ) : (
          <div className="mx-auto mb-6">
            <div className="h-12 w-12 rounded-md bg-theme-500 flex items-center justify-center text-light-500 font-bold text-2xl">A</div>
          </div>
        )}
        
        <div className="max-w-md w-full mx-auto bg-light-500 rounded-lg shadow-lg p-8 transition-all duration-300">
          {title && (
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-primary-500">{title}</h2>
              {subtitle && <p className="mt-2 text-sm text-gray-600">{subtitle}</p>}
              {error && (
                <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
      
      <footer className="py-4 text-center text-sm text-gray-600">
        <div className="flex justify-center space-x-4">
          <Link href="/terms" className="hover:text-theme-600 transition-colors">Terms</Link>
          <span>•</span>
          <Link href="/privacy" className="hover:text-theme-600 transition-colors">Privacy</Link>
          <span>•</span>
          <Link href="/help" className="hover:text-theme-600 transition-colors">Help</Link>
        </div>
        <p className="mt-2 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Resume Builder. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AuthLayout;
