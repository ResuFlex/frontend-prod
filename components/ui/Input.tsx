import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, leftIcon, rightIcon, helperText, className = '', ...props }, ref) => {
    const inputBaseStyles = 'block w-full rounded-md shadow-sm focus:ring-theme-500 focus:border-theme-500 sm:text-sm';
    const inputErrorStyles = error ? 'border-red-300 text-red-900 placeholder-red-300' : 'border-gray-300';
    const iconStyles = 'absolute inset-y-0 flex items-center pointer-events-none text-gray-500';
    
    return (
      <div className="mb-4">
        {label && (
          <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && <div className={`${iconStyles} left-0 pl-3`}>{leftIcon}</div>}
          
          <input
            ref={ref}
            className={`${inputBaseStyles} ${inputErrorStyles} ${leftIcon ? 'pl-10' : ''} ${rightIcon ? 'pr-10' : ''} ${className}`}
            aria-invalid={error ? 'true' : 'false'}
            {...props}
          />
          
          {rightIcon && <div className={`${iconStyles} right-0 pr-3`}>{rightIcon}</div>}
        </div>
        
        {error ? (
          <p className="mt-2 text-sm text-red-600" id={`${props.id}-error`}>
            {error}
          </p>
        ) : helperText ? (
          <p className="mt-2 text-sm text-gray-500" id={`${props.id}-description`}>
            {helperText}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
