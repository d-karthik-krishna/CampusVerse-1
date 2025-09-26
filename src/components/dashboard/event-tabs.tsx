'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Paintbrush, Code, Users } from 'lucide-react';
import type { EventCategory } from '@/lib/types';

interface EventTabsProps {
  activeCategory: EventCategory;
  onCategoryChange: (category: EventCategory) => void;
}

const categories: { name: EventCategory; icon: React.ElementType }[] = [
  { name: 'cultural', icon: Paintbrush },
  { name: 'tech', icon: Code },
  { name: 'clubs', icon: Users },
];

export function EventTabs({ activeCategory, onCategoryChange }: EventTabsProps) {
  return (
    <Tabs value={activeCategory} onValueChange={(value) => onCategoryChange(value as EventCategory)} className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-transparent p-1 h-auto gap-4">
        {categories.map((category) => (
          <TabsTrigger
            key={category.name}
            value={category.name}
            className="capitalize flex items-center justify-center gap-3 py-4 text-lg font-semibold rounded-lg neumorphic-raised-interactive data-[state=active]:neumorphic-pressed data-[state=active]:text-primary data-[state=active]:scale-105 transition-transform"
          >
            <category.icon className="w-6 h-6" />
            {category.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
