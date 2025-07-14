import { useState } from 'react';

export type PageType = 
  | 'dashboard' 
  | 'employees' 
  | 'tasks' 
  | 'calendar' 
  | 'documents' 
  | 'reports' 
  | 'settings'
  | 'profile';

export function useNavigation() {
  const [currentPage, setCurrentPage] = useState<PageType>('dashboard');

  return {
    currentPage,
    setCurrentPage,
  };
}