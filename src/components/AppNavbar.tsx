import React from 'react';
import { Navbar, NavbarSection, NavbarSpacer } from '../../typescript/navbar';
import { Heading } from '../../typescript/heading';
import { useNavigation } from '../hooks/useNavigation';

const pageLabels: Record<string, string> = {
  dashboard: 'Dashboard',
  employees: 'Employee Management',
  tasks: 'Task Management',
  calendar: 'Calendar',
  documents: 'Document Management',
  reports: 'Reports & Analytics',
  settings: 'System Settings',
  profile: 'User Profile'
};

export function AppNavbar() {
  const { currentPage } = useNavigation();

  return (
    <Navbar>
      <NavbarSection>
        <Heading level={1} className="text-lg">
          {pageLabels[currentPage] || 'Office Management'}
        </Heading>
      </NavbarSection>
      <NavbarSpacer />
    </Navbar>
  );
}