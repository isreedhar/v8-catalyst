import React from 'react';
import {
  Sidebar,
  SidebarHeader,
  SidebarBody,
  SidebarFooter,
  SidebarSection,
  SidebarItem,
  SidebarLabel,
  SidebarDivider
} from '../../typescript/sidebar';
import { Avatar } from '../../typescript/avatar';
import { Dropdown, DropdownButton, DropdownMenu, DropdownItem } from '../../typescript/dropdown';
import { useAuth } from '../contexts/AuthContext';
import { useNavigation } from '../hooks/useNavigation';

// Icons (you can replace these with your preferred icon library)
function DashboardIcon() {
  return (
    <svg data-slot="icon" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg data-slot="icon" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}

function TasksIcon() {
  return (
    <svg data-slot="icon" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
    </svg>
  );
}

function DocumentsIcon() {
  return (
    <svg data-slot="icon" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg data-slot="icon" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  );
}

function ReportsIcon() {
  return (
    <svg data-slot="icon" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg data-slot="icon" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a6.759 6.759 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg data-slot="icon" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export function AppSidebar() {
  const { user, logout } = useAuth();
  const { currentPage, setCurrentPage } = useNavigation();

  const canAccessUserManagement = user?.role === 'admin' || user?.role === 'super_admin' || user?.role === 'manager';
  const canAccessReports = user?.role === 'admin' || user?.role === 'super_admin' || user?.role === 'manager';
  const canAccessSettings = user?.role === 'admin' || user?.role === 'super_admin';

  return (
    <Sidebar className="bg-white border-r border-zinc-950/5 dark:bg-zinc-900 dark:border-white/5">
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500">
            <span className="text-sm font-semibold text-white">OM</span>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-zinc-950 dark:text-white">Office Manager</h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Management System</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarBody>
        <SidebarSection>
          <SidebarItem 
            current={currentPage === 'dashboard'} 
            onClick={() => setCurrentPage('dashboard')}
          >
            <DashboardIcon />
            <SidebarLabel>Dashboard</SidebarLabel>
          </SidebarItem>

          <SidebarItem 
            current={currentPage === 'tasks'} 
            onClick={() => setCurrentPage('tasks')}
          >
            <TasksIcon />
            <SidebarLabel>Tasks</SidebarLabel>
          </SidebarItem>

          <SidebarItem 
            current={currentPage === 'calendar'} 
            onClick={() => setCurrentPage('calendar')}
          >
            <CalendarIcon />
            <SidebarLabel>Calendar</SidebarLabel>
          </SidebarItem>

          <SidebarItem 
            current={currentPage === 'documents'} 
            onClick={() => setCurrentPage('documents')}
          >
            <DocumentsIcon />
            <SidebarLabel>Documents</SidebarLabel>
          </SidebarItem>
        </SidebarSection>

        {canAccessUserManagement && (
          <SidebarSection>
            <SidebarItem 
              current={currentPage === 'employees'} 
              onClick={() => setCurrentPage('employees')}
            >
              <UsersIcon />
              <SidebarLabel>Employees</SidebarLabel>
            </SidebarItem>
          </SidebarSection>
        )}

        {canAccessReports && (
          <SidebarSection>
            <SidebarItem 
              current={currentPage === 'reports'} 
              onClick={() => setCurrentPage('reports')}
            >
              <ReportsIcon />
              <SidebarLabel>Reports</SidebarLabel>
            </SidebarItem>
          </SidebarSection>
        )}

        <SidebarDivider />

        {canAccessSettings && (
          <SidebarSection>
            <SidebarItem 
              current={currentPage === 'settings'} 
              onClick={() => setCurrentPage('settings')}
            >
              <SettingsIcon />
              <SidebarLabel>Settings</SidebarLabel>
            </SidebarItem>
          </SidebarSection>
        )}
      </SidebarBody>

      <SidebarFooter>
        <Dropdown>
          <DropdownButton as={SidebarItem}>
            <Avatar src={user?.avatar} initials={user?.name?.split(' ').map(n => n[0]).join('')} />
            <SidebarLabel>{user?.name}</SidebarLabel>
            <ChevronDownIcon />
          </DropdownButton>
          <DropdownMenu>
            <DropdownItem onClick={() => setCurrentPage('profile')}>
              <span>Profile</span>
            </DropdownItem>
            <DropdownItem onClick={logout}>
              <span>Sign out</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </SidebarFooter>
    </Sidebar>
  );
}