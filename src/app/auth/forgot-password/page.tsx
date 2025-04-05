'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import AuthLayout from '@/components/auth/AuthLayout';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Alert from '@/components/ui/Alert';
import { requestPasswordReset } from '@/api/auth';
import { PasswordResetRequest } from '@/types';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const data: PasswordResetRequest = { email };
      const response = await requestPasswordReset(data);
      
      if (response.error) {
        setError(response.error);
      } else {
        setSuccess('Password reset link sent to your email. Please check your inbox.');
        setEmail('');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Reset your password">
      {error && <Alert type="error" message={error} />}
      {success && <Alert type="success" message={success} />}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <p className="text-sm text-gray-600 mb-4">
            Enter your email address and we&apos;ll send you a link to reset your password.
          </p>
          
          <Input
            id="email"
            name="email"
            type="email"
            label="Email address"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <Button 
          type="submit" 
          fullWidth 
          isLoading={loading}
        >
          Send reset link
        </Button>

        <div className="text-center mt-4">
          <Link 
            href="/login" 
            className="text-sm text-primary-500 hover:text-primary-600"
          >
            Back to login
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
