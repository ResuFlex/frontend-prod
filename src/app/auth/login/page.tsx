'use client';

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AuthLayout from '@/components/auth/AuthLayout'
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { useAuth } from '@/src/contexts/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { login, isLoading } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    try {
      await login({ email, password });
      router.push('/profile'); // Redirect to profile after login
    } catch (err) {
      setError((err as Error).message || 'Failed to login. Please check your credentials and try again.');
    }
  };
  
  return (
    <AuthLayout 
      title="Sign in to your account" 
      subtitle="Or create a new account if you don't have one"
    >
      {/* {error && (
        <Alert variant="error" title="Login failed">
          {error}
        </Alert>
      )}
       */}
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
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
        
        <div>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />
          <div className="text-right mt-1">
            <Link href="/auth/reset-password" className="text-sm text-theme-600 hover:text-theme-500">
              Forgot password?
            </Link>
          </div>
        </div>
        
        <Button type="submit" fullWidth >
          Sign in
        </Button>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/auth/register" className="font-medium text-theme-600 hover:text-theme-500">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
}
