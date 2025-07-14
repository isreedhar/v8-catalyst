import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, AuthContextType, UserRole } from '../types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demonstration
const mockUsers: Record<string, { password: string; user: User }> = {
  'admin@company.com': {
    password: 'admin123',
    user: {
      id: '1',
      name: 'John Admin',
      email: 'admin@company.com',
      role: 'admin',
      department: 'IT',
      position: 'System Administrator'
    }
  },
  'manager@company.com': {
    password: 'manager123',
    user: {
      id: '2',
      name: 'Sarah Manager',
      email: 'manager@company.com',
      role: 'manager',
      department: 'Operations',
      position: 'Operations Manager'
    }
  },
  'staff@company.com': {
    password: 'staff123',
    user: {
      id: '3',
      name: 'Mike Staff',
      email: 'staff@company.com',
      role: 'staff',
      department: 'Sales',
      position: 'Sales Representative'
    }
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser = mockUsers[email];
    if (mockUser && mockUser.password === password) {
      setUser(mockUser.user);
    } else {
      throw new Error('Invalid credentials');
    }
    
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}