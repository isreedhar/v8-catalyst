import React, { useState } from 'react';
import { Button } from '../../typescript/button';
import { Input } from '../../typescript/input';
import { Field, Label, ErrorMessage } from '../../typescript/fieldset';
import { Heading } from '../../typescript/heading';
import { Text } from '../../typescript/text';
import { AuthLayout } from '../../typescript/auth-layout';
import { useAuth } from '../contexts/AuthContext';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await login(email, password);
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-sm">
        <div className="mb-8">
          <Heading>Sign in to your account</Heading>
          <Text className="mt-2">Welcome back! Please enter your details.</Text>
        </div>

        <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200 dark:bg-blue-900/20 dark:border-blue-800">
          <Text className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">Demo Credentials:</Text>
          <div className="space-y-1 text-xs text-blue-700 dark:text-blue-300">
            <div>Admin: admin@company.com / admin123</div>
            <div>Manager: manager@company.com / manager123</div>
            <div>Staff: staff@company.com / staff123</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Field>
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </Field>

          <Field>
            <Label>Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </Field>

          <Button
            type="submit"
            color="blue"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
}