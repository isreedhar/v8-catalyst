import React from 'react';
import { Heading } from '../../../typescript/heading';
import { Text } from '../../../typescript/text';
import { Button } from '../../../typescript/button';

interface PlaceholderPageProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function PlaceholderPage({ title, description, icon }: PlaceholderPageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      {icon && (
        <div className="mb-6 p-4 bg-zinc-100 rounded-full dark:bg-zinc-800">
          <div className="h-12 w-12 text-zinc-500 dark:text-zinc-400">
            {icon}
          </div>
        </div>
      )}
      
      <Heading className="mb-4">{title}</Heading>
      <Text className="mb-8 max-w-md">{description}</Text>
      
      <div className="flex gap-4">
        <Button color="blue">Get Started</Button>
        <Button plain>Learn More</Button>
      </div>
    </div>
  );
}