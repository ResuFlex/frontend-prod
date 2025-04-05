'use client';

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthLayout from '@/components/auth/AuthLayout';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Alert from '@/components/ui/Alert';
import { useAuth } from '@/src/contexts/AuthContext';

export default function RegisterPage() {
  const router = useRouter();
  const { register, isLoading } = useAuth();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    
    try {
      await register({ name, email, password });
      router.push('/profile'); // Redirect to profile after registration
    } catch (err) {
      setError((err as Error).message || 'Failed to create account. Please try again.');
    }
  };
  
  return (
    <AuthLayout 
      title="Create your account" 
      subtitle="Start building professional resumes today"
    >
      {/* {error && (
        <Alert variant="error" title="Registration failed">
          {error}
        </Alert>
      )} */}
      
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <Input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          label="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
        />
        
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@example.com"
        />
        
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          label="Password"
          helperText="Must be at least 8 characters long"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
        />
        
        <Input
          id="confirm-password"
          name="confirm-password"
          type="password"
          autoComplete="new-password"
          required
          label="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="••••••••"
        />
        
        <Button type="submit" fullWidth >
          Create account
        </Button>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="font-medium text-theme-600 hover:text-theme-500">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
