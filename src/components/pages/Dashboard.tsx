import React from 'react';
import { Heading, Subheading } from '../../../typescript/heading';
import { Text } from '../../../typescript/text';
import { Badge } from '../../../typescript/badge';
import { Button } from '../../../typescript/button';
import { useAuth } from '../../contexts/AuthContext';

export function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div>
        <Heading>Welcome back, {user?.name}!</Heading>
        <div className="mt-2 flex items-center gap-2">
          <Text>Role: </Text>
          <Badge color="blue">{user?.role?.replace('_', ' ').toUpperCase()}</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white rounded-lg border border-zinc-950/5 p-6 dark:bg-zinc-900 dark:border-white/5">
          <div className="flex items-center justify-between">
            <div>
              <Text className="text-sm font-medium">Total Tasks</Text>
              <div className="mt-2 text-3xl font-bold text-zinc-950 dark:text-white">24</div>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center dark:bg-blue-900/20">
              <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <Text className="text-sm">
              <span className="text-green-600 font-medium">+12%</span> from last month
            </Text>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-zinc-950/5 p-6 dark:bg-zinc-900 dark:border-white/5">
          <div className="flex items-center justify-between">
            <div>
              <Text className="text-sm font-medium">Completed</Text>
              <div className="mt-2 text-3xl font-bold text-zinc-950 dark:text-white">18</div>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center dark:bg-green-900/20">
              <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <Text className="text-sm">
              <span className="text-green-600 font-medium">+8%</span> from last month
            </Text>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-zinc-950/5 p-6 dark:bg-zinc-900 dark:border-white/5">
          <div className="flex items-center justify-between">
            <div>
              <Text className="text-sm font-medium">In Progress</Text>
              <div className="mt-2 text-3xl font-bold text-zinc-950 dark:text-white">6</div>
            </div>
            <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center dark:bg-yellow-900/20">
              <svg className="h-6 w-6 text-yellow-600 dark:text-yellow-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <Text className="text-sm">
              <span className="text-yellow-600 font-medium">-2%</span> from last month
            </Text>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-zinc-950/5 p-6 dark:bg-zinc-900 dark:border-white/5">
          <div className="flex items-center justify-between">
            <div>
              <Text className="text-sm font-medium">Team Members</Text>
              <div className="mt-2 text-3xl font-bold text-zinc-950 dark:text-white">12</div>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center dark:bg-purple-900/20">
              <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
          </div>
          <div className="mt-4">
            <Text className="text-sm">
              <span className="text-purple-600 font-medium">+1</span> new this month
            </Text>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-lg border border-zinc-950/5 p-6 dark:bg-zinc-900 dark:border-white/5">
          <div className="flex items-center justify-between mb-4">
            <Subheading>Recent Tasks</Subheading>
            <Button plain>View all</Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Text className="font-medium text-zinc-950 dark:text-white">Update project documentation</Text>
                <Text className="text-sm">Due: Today</Text>
              </div>
              <Badge color="yellow">In Progress</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Text className="font-medium text-zinc-950 dark:text-white">Review quarterly reports</Text>
                <Text className="text-sm">Due: Tomorrow</Text>
              </div>
              <Badge color="red">High Priority</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Text className="font-medium text-zinc-950 dark:text-white">Team meeting preparation</Text>
                <Text className="text-sm">Due: Friday</Text>
              </div>
              <Badge color="blue">Assigned</Badge>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-zinc-950/5 p-6 dark:bg-zinc-900 dark:border-white/5">
          <div className="flex items-center justify-between mb-4">
            <Subheading>Upcoming Events</Subheading>
            <Button plain>View calendar</Button>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
              <div>
                <Text className="font-medium text-zinc-950 dark:text-white">Team Standup</Text>
                <Text className="text-sm">Today, 9:00 AM</Text>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>
              <div>
                <Text className="font-medium text-zinc-950 dark:text-white">Client Presentation</Text>
                <Text className="text-sm">Tomorrow, 2:00 PM</Text>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
              <div>
                <Text className="font-medium text-zinc-950 dark:text-white">Department Meeting</Text>
                <Text className="text-sm">Friday, 10:00 AM</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}