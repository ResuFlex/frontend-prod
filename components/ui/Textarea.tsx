import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ 
  label, 
  error,
  className = '', 
  fullWidth = true,
  id,
  ...props 
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s/g, '-');
  
  return (
    <div className={`mb-4 ${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label 
          htmlFor={inputId} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        className={`
          px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400
          focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500
          rounded-md w-full min-h-[100px] ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
};

export default Textarea;
