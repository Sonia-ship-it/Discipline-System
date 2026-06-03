'use client';

import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  change?: string;
  variant?: 'dark' | 'light';
}

export default function StatCard({
  icon: Icon,
  label,
  value,
  change,
  variant = 'dark',
}: StatCardProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`rounded-[8px] p-4 sm:p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 min-h-32 sm:min-h-40 ${
        isDark
          ? 'text-white'
          : 'bg-white text-gray-900 border border-gray-200'
      }`}
      style={isDark ? { backgroundColor: '#001240', boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)' } : { boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)' }}
    >
      <Icon className="h-10 w-10 sm:h-12 sm:w-12 shrink-0" />
      <div className="flex-1">
        <p className={`text-xs sm:text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {label}
        </p>
        <div className="mt-1">
          <span className="text-2xl sm:text-3xl font-bold block">{value}</span>
          {change && (
            <span className={`text-xs font-medium block mt-1 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
              {change}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
