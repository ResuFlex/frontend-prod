'use client';

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

import AuthLayout from '@/components/auth/AuthLayout';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Alert from '@/components/ui/Alert';
import { resetPassword } from '@/api/auth';
// import { PasswordResetConfirmRequest } from '@/types';

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const router = useRouter();
  const params = useParams();
  const token = params?.token as string;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Basic validation
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (newPassword.length < 8) {
      setError('Password must be at least 8 characters long');
      setLoading(false);
      return;
    }

    try {
      const data = {
        token,
        new_password: newPassword,
      };

      const response = await resetPassword(token, data);
      
      if (response.error) {
        setError(response.error);
      } else {
        setSuccess('Password has been reset successfully!');
        // Redirect to login after a short delay
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Set new password">
      {error && <Alert type="error" message={error} />}
      {success && <Alert type="success" message={success} />}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          id="new-password"
          name="new-password"
          type="password"
          label="New password"
          autoComplete="new-password"
          required
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Input
          id="confirm-password"
          name="confirm-password"
          type="password"
          label="Confirm new password"
          autoComplete="new-password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button 
          type="submit" 
          fullWidth 
          // isLoading={loading}
        >
          Reset password
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

export default ResetPasswordPage;
