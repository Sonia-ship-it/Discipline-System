'use client';

// Skeleton for stats cards
export function StatCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm">
      <div className="bg-gray-200 w-12 h-12 rounded-lg mb-4 animate-pulse" />
      <div className="bg-gray-200 h-4 w-24 mb-2 rounded animate-pulse" />
      <div className="bg-gray-200 h-8 w-16 mb-3 rounded animate-pulse" />
      <div className="bg-gray-200 h-3 w-32 rounded animate-pulse" />
    </div>
  );
}

// Skeleton for table rows
export function TableRowSkeleton() {
  return (
    <tr className="border-b border-gray-200">
      <td className="px-6 py-4">
        <div className="bg-gray-200 h-4 w-32 rounded animate-pulse" />
      </td>
      <td className="px-6 py-4">
        <div className="bg-gray-200 h-4 w-40 rounded animate-pulse" />
      </td>
      <td className="px-6 py-4">
        <div className="bg-gray-200 h-4 w-24 rounded animate-pulse" />
      </td>
      <td className="px-6 py-4">
        <div className="bg-gray-200 h-4 w-20 rounded animate-pulse" />
      </td>
      <td className="px-6 py-4">
        <div className="bg-gray-200 h-8 w-16 rounded animate-pulse" />
      </td>
    </tr>
  );
}

// Skeleton for chart container
export function ChartSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="bg-gray-200 h-6 w-40 rounded animate-pulse" />
        <div className="flex gap-2">
          <div className="bg-gray-200 h-8 w-20 rounded animate-pulse" />
          <div className="bg-gray-200 h-8 w-20 rounded animate-pulse" />
          <div className="bg-gray-200 h-8 w-20 rounded animate-pulse" />
        </div>
      </div>
      <div className="h-80 bg-gray-100 rounded animate-pulse" />
    </div>
  );
}

// Skeleton for profile form
export function ProfileFormSkeleton() {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gray-200 animate-pulse" />
          <div>
            <div className="bg-gray-200 h-8 w-40 rounded mb-2 animate-pulse" />
            <div className="bg-gray-200 h-4 w-24 rounded animate-pulse" />
          </div>
        </div>
        <div className="bg-gray-200 h-10 w-24 rounded animate-pulse" />
      </div>
    </div>
  );
}

// Skeleton for form fields
export function FormFieldSkeleton() {
  return (
    <div>
      <div className="bg-gray-200 h-4 w-24 mb-2 rounded animate-pulse" />
      <div className="bg-gray-200 h-10 w-full rounded animate-pulse" />
    </div>
  );
}

// Skeleton for pie chart
export function PieChartSkeleton() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="bg-gray-200 h-6 w-40 rounded animate-pulse" />
        <div className="bg-gray-200 h-8 w-24 rounded animate-pulse" />
      </div>
      <div className="flex items-center justify-center mb-6">
        <div className="w-64 h-64 bg-gray-100 rounded-full animate-pulse" />
      </div>
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-gray-200 animate-pulse" />
              <div className="bg-gray-200 h-4 w-32 rounded animate-pulse" />
            </div>
            <div className="bg-gray-200 h-4 w-12 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
