'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { API_URL } from "@/lib/config";
import { ChevronDown, BookOpen, Users, RotateCcw, Clock, TrendingUp, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { StatCardSkeleton, ChartSkeleton, PieChartSkeleton } from '@/components/SkeletonLoaders';

type TimeFilter = 'Weekly' | 'Monthly' | 'Yearly';
type PopularBooksFilter = 'weekly' | 'monthly';

interface DashboardStats {
  stats: {
    totalBooks: number;
    borrowedBooks: number;
    overdueBooks: number;
    returnedBooks: number;
    totalUsers: number;
  };
  graphData: Array<{
    date: string;
    borrowed: number;
    returned: number;
  }>;
}

interface Book {
  id: string;
  title: string;
  author: string;
  ISBN: string;
  publisher: string;
  remaining_copies: number;
  borrowed: number;
  isAvailable: boolean;
}

interface BorrowRecord {
  id: string;
  borrowDate: string;
  returnDate?: string;
  status: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  book: {
    id: string;
    title: string;
    author: string;
  };
}

export default function AnalyticsPage() {
  const router = useRouter();
  const [borrowedReturnedFilter, setBorrowedReturnedFilter] = useState<TimeFilter>('Weekly');
  const [popularBooksFilter, setPopularBooksFilter] = useState<PopularBooksFilter>('weekly');
  const [libraryUsageFilter, setLibraryUsageFilter] = useState<TimeFilter>('Weekly');
  const [popularBooksBottomFilter, setPopularBooksBottomFilter] = useState<PopularBooksFilter>('weekly');

  // API Data States
  const [dashboardStats, setDashboardStats] = useState<DashboardStats | null>(null);
  const [books, setBooks] = useState<Book[]>([]);
  const [borrows, setBorrows] = useState<BorrowRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isBorrowedReturnedLoading, setIsBorrowedReturnedLoading] = useState(false);
  const [isPopularBooksLoading, setIsPopularBooksLoading] = useState(false);
  const [isLibraryUsageLoading, setIsLibraryUsageLoading] = useState(false);
  const [isStatusDistributionLoading, setIsStatusDistributionLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Helper function to get range parameter based on filter
  const getRangeParameter = (filter: TimeFilter): string => {
    switch (filter) {
      case 'Weekly':
        return '5days';
      case 'Monthly':
        return 'month';
      case 'Yearly':
        return 'year';
      default:
        return '5days';
    }
  };

  // Fetch borrowed & returned data based on filter
  const fetchBorrowedReturnedData = async (filter: TimeFilter) => {
    try {
      setIsBorrowedReturnedLoading(true);
      const token = localStorage.getItem('access_token');
      if (!token) return;

      const range = getRangeParameter(filter);
      
      const response = await fetch(`${API_URL}/admin/dashboard/stats?range=${range}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDashboardStats(data);
      } else {
        console.error('Failed to fetch borrowed & returned data:', response.status);
      }
    } catch (err) {
      console.error('Error fetching borrowed & returned data:', err);
    } finally {
      setIsBorrowedReturnedLoading(false);
    }
  };

  // Fetch data from API once on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem('access_token');

        if (!token) {
          router.push('/');
          return;
        }

        // Fetch dashboard stats with default range
        const statsResponse = await fetch(`${API_URL}/admin/dashboard/stats?range=5days`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        // Fetch books
        const booksResponse = await fetch(`${API_URL}/admin/books`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        // Fetch borrows
        const borrowsResponse = await fetch(`${API_URL}/admin/borrows`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (statsResponse.ok && booksResponse.ok && borrowsResponse.ok) {
          const statsData = await statsResponse.json();
          const booksData = await booksResponse.json();
          const borrowsData = await borrowsResponse.json();

          setDashboardStats(statsData);
          setBooks(booksData.books || []);
          setBorrows(borrowsData.borrows || []);
        } else {
          setError('Failed to fetch analytics data');
        }
      } catch (err) {
        console.error('Error fetching analytics data:', err);
        setError('Error loading analytics data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [router]); // Only fetch once on component mount

  // Fetch borrowed & returned data when filter changes
  useEffect(() => {
    fetchBorrowedReturnedData(borrowedReturnedFilter);
  }, [borrowedReturnedFilter]);

  // Handle popular books filter change with loading state
  useEffect(() => {
    setIsPopularBooksLoading(true);
    const timer = setTimeout(() => {
      setIsPopularBooksLoading(false);
    }, 500); // Simulate a short delay for filtering
    return () => clearTimeout(timer);
  }, [popularBooksFilter]);

  // Handle status distribution filter change with loading state
  useEffect(() => {
    setIsStatusDistributionLoading(true);
    const timer = setTimeout(() => {
      setIsStatusDistributionLoading(false);
    }, 500); // Simulate a short delay for filtering
    return () => clearTimeout(timer);
  }, [popularBooksBottomFilter]);

  // Fetch library usage data when filter changes
  useEffect(() => {
    const fetchLibraryUsageData = async () => {
      try {
        setIsLibraryUsageLoading(true);
        const token = localStorage.getItem('access_token');
        if (!token) return;

        const borrowsResponse = await fetch(`${API_URL}/admin/borrows`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (borrowsResponse.ok) {
          const borrowsData = await borrowsResponse.json();
          setBorrows(borrowsData.borrows || []);
        }
      } catch (err) {
        console.error('Error fetching library usage data:', err);
      } finally {
        setIsLibraryUsageLoading(false);
      }
    };

    fetchLibraryUsageData();
  }, [libraryUsageFilter]);

  // Calculate borrow counts for each book from borrow records with time filtering
  const enrichBooksWithBorrowCounts = (books: Book[], borrows: BorrowRecord[], filter: PopularBooksFilter) => {
    const now = new Date();
    const startTime = new Date();
    startTime.setHours(0, 0, 0, 0); // Start from beginning of the day

    if (filter === 'weekly') {
      // Last 7 days
      startTime.setDate(now.getDate() - 7);
    } else {
      // From the start of the previous month to include more historical context
      startTime.setMonth(now.getMonth() - 1);
      startTime.setDate(1); 
    }

    const filteredBorrows = borrows.filter(b => {
      const borrowDate = new Date(b.borrowDate);
      return borrowDate >= startTime && borrowDate <= now;
    });

    return books.map(book => {
      const borrowCount = filteredBorrows.filter(b => b.book.id === book.id).length;
      return { ...book, borrowed: borrowCount };
    });
  };

  // Calculate popular books from actual data
  const calculatePopularBooks = (timeFilter: PopularBooksFilter) => {
    if (!books.length || !borrows.length) return [];

    const enrichedBooks = enrichBooksWithBorrowCounts(books, borrows, timeFilter);
    const sortedBooks = [...enrichedBooks]
      .sort((a, b) => (b.borrowed || 0) - (a.borrowed || 0))
      .slice(0, 3);

    const total = sortedBooks.reduce((sum, book) => sum + (book.borrowed || 0), 0);
    if (total === 0) return [];

    return sortedBooks.map((book, index) => ({
      name: book.title.length > 15 ? book.title.substring(0, 15) + '...' : book.title,
      value: Math.round((book.borrowed / total) * 100),
      color: index === 0 ? '#001240' : index === 1 ? '#334155' : '#64748b'
    }));
  };

  // Calculate library usage from borrow data (students only)
  const calculateLibraryUsage = (timeFilter: TimeFilter) => {
    if (!borrows.length) {
      // Return default data structure with zeros
      return timeFilter === 'Weekly'
        ? [
          { period: 'Mon', student: 0 },
          { period: 'Tue', student: 0 },
          { period: 'Wed', student: 0 },
          { period: 'Thu', student: 0 },
          { period: 'Fri', student: 0 },
          { period: 'Sat', student: 0 },
          { period: 'Sun', student: 0 },
        ]
        : [
          { period: 'Jan', student: 0 },
          { period: 'Feb', student: 0 },
          { period: 'Mar', student: 0 },
          { period: 'Apr', student: 0 },
          { period: 'May', student: 0 },
          { period: 'Jun', student: 0 },
          { period: 'Jul', student: 0 },
          { period: 'Aug', student: 0 },
          { period: 'Sep', student: 0 },
          { period: 'Oct', student: 0 },
          { period: 'Nov', student: 0 },
          { period: 'Dec', student: 0 },
        ];
    }

    // Filter only student borrows
    const studentBorrows = borrows.filter(borrow =>
      borrow.user.role === 'STUDENT' || borrow.user.role === 'USER'
    );

    if (timeFilter === 'Weekly') {
      const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

      const result = days.map((day, index) => {
        // Calculate the date for this day in the last 7 days
        const targetDate = new Date(today);
        const currentDayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.
        const targetDayOfWeek = index === 6 ? 0 : index + 1; // Convert our index to JS day (0 = Sunday)
        
        // Calculate days to subtract to get to this target day
        let daysAgo = currentDayOfWeek - targetDayOfWeek;
        if (daysAgo < 0) daysAgo += 7; // If target day is in the future, go back a week
        
        targetDate.setDate(today.getDate() - daysAgo);
        const startOfDay = new Date(targetDate.setHours(0, 0, 0, 0));
        const endOfDay = new Date(targetDate.setHours(23, 59, 59, 999));

        // Count borrows on this specific date
        const dayStudentBorrows = studentBorrows.filter(borrow => {
          const borrowDate = new Date(borrow.borrowDate);
          return borrowDate >= startOfDay && borrowDate <= endOfDay;
        });

        return {
          period: day,
          student: dayStudentBorrows.length,
        };
      });

      return result;
    } else {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const currentYear = new Date().getFullYear();

      const result = months.map((month, index) => {
        // Calculate borrows for each month of the current year
        const startOfMonth = new Date(currentYear, index, 1);
        const endOfMonth = new Date(currentYear, index + 1, 0, 23, 59, 59, 999);

        const monthStudentBorrows = studentBorrows.filter(borrow => {
          const borrowDate = new Date(borrow.borrowDate);
          return borrowDate >= startOfMonth && borrowDate <= endOfMonth;
        });

        return {
          period: month,
          student: monthStudentBorrows.length,
        };
      });

      return result;
    }
  };

  // Calculate book status distribution
  const calculateBookStatusDistribution = () => {
    if (!dashboardStats) return [];

    const { totalBooks, borrowedBooks, overdueBooks } = dashboardStats.stats;
    const availableBooks = totalBooks - borrowedBooks;

    const total = totalBooks;

    return [
      {
        name: 'Borrowed',
        value: total > 0 ? Math.round((borrowedBooks / total) * 100) : 0,
        color: '#001240'
      },
      {
        name: 'Available',
        value: total > 0 ? Math.round((availableBooks / total) * 100) : 0,
        color: '#3b82f6'
      },
      {
        name: 'Overdue',
        value: total > 0 ? Math.round((overdueBooks / total) * 100) : 0,
        color: '#64748b'
      },
    ];
  };

  // Stats data from API
  const stats = dashboardStats ? [
    {
      label: 'Total Books',
      value: dashboardStats.stats.totalBooks.toLocaleString(),
      period: 'This month',
      color: '#001240',
    },
    {
      label: 'Borrowed books',
      value: dashboardStats.stats.borrowedBooks.toLocaleString(),
      period: 'This month',
      color: '#001240',
    },
    {
      label: 'Overdue items',
      value: dashboardStats.stats.overdueBooks.toLocaleString(),
      period: 'This month',
      color: '#001240',
    },
    {
      label: 'Returned items',
      value: dashboardStats.stats.returnedBooks.toLocaleString(),
      period: 'This month',
      color: '#001240',
    },
    {
      label: 'Total users',
      value: dashboardStats.stats.totalUsers.toLocaleString(),
      period: 'This month',
      color: '#001240',
    },
  ] : [];

  // Get filtered data based on current selections and API data
  const borrowedReturnedData = dashboardStats?.graphData || [];
  const popularBooksData = calculatePopularBooks(popularBooksFilter);
  const libraryUsageData = calculateLibraryUsage(libraryUsageFilter);
  const statusDistributionData = calculateBookStatusDistribution();

  // Custom label component for pie chart
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, value }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="12"
        fontWeight="bold"
      >
        {`${value}%`}
      </text>
    );
  };

  return (
    <div>
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {isLoading ? (
        <>
          {/* Stats Cards Skeleton */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <StatCardSkeleton key={i} />
            ))}
          </div>

          {/* Charts Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8">
            <ChartSkeleton />
            <PieChartSkeleton />
          </div>

          {/* Bottom Charts Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            <ChartSkeleton />
            <PieChartSkeleton />
          </div>
        </>
      ) : (
        <>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-4 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 border border-gray-200 shadow-sm"
              >
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <img
                    src="/assets/reports.png"
                    alt="Analytics icon"
                    className="h-6 w-6 object-contain"
                  />
                </div>
                <h3 className="text-gray-600 text-xs font-medium mb-1">{stat.label}</h3>
                <p className="text-2xl font-bold text-gray-900 mb-3">{stat.value}</p>
                <p className="text-xs text-gray-500">
                  <span className="text-green-600 font-semibold">↗</span> {stat.period}
                </p>
              </div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-8">
            {/* Borrowed & Returned Books Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <BarChart className="h-5 w-5 text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Borrowed & Returned books</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setBorrowedReturnedFilter('Weekly')}
                    className={`px-3 py-1 text-sm rounded transition-colors ${borrowedReturnedFilter === 'Weekly'
                      ? 'text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    style={borrowedReturnedFilter === 'Weekly' ? { backgroundColor: '#001240' } : {}}
                  >
                    Weekly
                  </button>
                  <button
                    onClick={() => setBorrowedReturnedFilter('Monthly')}
                    className={`px-3 py-1 text-sm rounded transition-colors ${borrowedReturnedFilter === 'Monthly'
                      ? 'text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    style={borrowedReturnedFilter === 'Monthly' ? { backgroundColor: '#001240' } : {}}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBorrowedReturnedFilter('Yearly')}
                    className={`px-3 py-1 text-sm rounded transition-colors ${borrowedReturnedFilter === 'Yearly'
                      ? 'text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    style={borrowedReturnedFilter === 'Yearly' ? { backgroundColor: '#001240' } : {}}
                  >
                    Yearly
                  </button>
                </div>
              </div>

              <div className="h-80">
                {isBorrowedReturnedLoading ? (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
                      <p className="text-gray-600 font-medium">Loading chart data...</p>
                    </div>
                  </div>
                ) : borrowedReturnedData.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={borrowedReturnedData} barCategoryGap="20%">
                      <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#64748b' }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: '#64748b' }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'white',
                          border: '1px solid #e2e8f0',
                          borderRadius: '8px',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                        }}
                      />
                      <Bar dataKey="borrowed" fill="#001240" name="Borrowed" radius={[2, 2, 0, 0]} />
                      <Bar dataKey="returned" fill="#3b82f6" name="Returned" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 font-medium mb-2">No chart data available</p>
                      <p className="text-sm text-gray-500">Data will appear here when available</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Popular Books Pie Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Popular Books</h3>
                <div className="relative">
                  <select
                    value={popularBooksFilter}
                    onChange={(e) => setPopularBooksFilter(e.target.value as PopularBooksFilter)}
                    className="appearance-none px-3 py-1 text-white text-sm rounded pr-8 cursor-pointer"
                    style={{ backgroundColor: '#001240' }}
                  >
                    <option value="weekly">weekly</option>
                    <option value="monthly">monthly</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white pointer-events-none" />
                </div>
              </div>

              {isPopularBooksLoading ? (
                <div className="flex items-center justify-center h-[300px]">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-slate-900 mx-auto mb-4"></div>
                    <p className="text-sm text-gray-500 font-medium">Loading popular books...</p>
                  </div>
                </div>
              ) : popularBooksData.length > 0 ? (
                <>
                  <div className="flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={popularBooksData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                            label={renderCustomizedLabel}
                          >
                            {popularBooksData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-gray-900">{books.length}</span>
                        <span className="text-sm text-gray-600">Books</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    {popularBooksData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-sm text-gray-700">{item.name}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium mb-2">No popular books data</p>
                    <p className="text-sm text-gray-500">Data will appear when books are borrowed</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            {/* Library Usage Line Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">Library Usage</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLibraryUsageFilter('Weekly')}
                    className={`px-3 py-1 text-sm rounded transition-colors ${libraryUsageFilter === 'Weekly'
                      ? 'text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    style={libraryUsageFilter === 'Weekly' ? { backgroundColor: '#001240' } : {}}
                  >
                    Weekly
                  </button>
                  <button
                    onClick={() => setLibraryUsageFilter('Monthly')}
                    className={`px-3 py-1 text-sm rounded transition-colors ${libraryUsageFilter === 'Monthly'
                      ? 'text-white'
                      : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    style={libraryUsageFilter === 'Monthly' ? { backgroundColor: '#001240' } : {}}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">
                    {libraryUsageData.reduce((sum, item) => sum + item.student, 0).toLocaleString()}
                  </span>
                </div>
              </div>

              {isLibraryUsageLoading ? (
                <ChartSkeleton />
              ) : (
                <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={libraryUsageData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis
                      dataKey="period"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#64748b' }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: '#64748b' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e2e8f0',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="student"
                      stroke="#001240"
                      strokeWidth={2}
                      dot={{ fill: '#001240', strokeWidth: 2, r: 4 }}
                      name="Student"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              )}
            </div>

            {/* Book Status Distribution Pie Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Book Status Distribution</h3>
                <div className="relative">
                  <select
                    value={popularBooksBottomFilter}
                    onChange={(e) => setPopularBooksBottomFilter(e.target.value as PopularBooksFilter)}
                    className="appearance-none px-3 py-1 text-white text-sm rounded pr-8 cursor-pointer"
                    style={{ backgroundColor: '#001240' }}
                  >
                    <option value="weekly">weekly</option>
                    <option value="monthly">monthly</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white pointer-events-none" />
                </div>
              </div>

              {isStatusDistributionLoading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#001240]"></div>
                </div>
              ) : statusDistributionData.length > 0 ? (
                <>
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative w-48 h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={statusDistributionData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            dataKey="value"
                            labelLine={false}
                            label={renderCustomizedLabel}
                          >
                            {statusDistributionData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {statusDistributionData.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-sm text-gray-700">{item.name}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-medium mb-2">No status data available</p>
                    <p className="text-sm text-gray-500">Data will appear when books are added</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}