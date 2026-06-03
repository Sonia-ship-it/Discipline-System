'use client';
// Sync commit to resolve deployment issue

import MetricCard from "@/components/MetricCard";
import BorrowedReturnedChart from "@/components/BorrowedReturnedChart";
import RecentActivity from "@/components/RecentActivity";
import BookLoansTable from "@/components/BookLoansTable";
import ViewBookLoanModal from "@/components/ViewBookLoanModal";
import StatCardSkeleton from "@/components/skeletons/StatCardSkeleton";
import ChartSkeleton from "@/components/skeletons/ChartSkeleton";
import RecentActivitySkeleton from "@/components/skeletons/RecentActivitySkeleton";
import TableSkeleton from "@/components/skeletons/TableSkeleton";
import { BookOpen, BookMarked, AlertCircle, CheckCircle, Users, Search, Filter } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGlobalNotification } from '@/hooks/useGlobalNotification';
import { useAuthStore } from '@/stores/authStore';
import { API_URL } from "@/lib/config";

const getAuthToken = () =>
  getAuthToken() || localStorage.getItem('auth-token');

interface DashboardStats {
  stats: {
    totalBooks: number;
    borrowedBooks: number;
    overdueBooks: number;
    returnedBooks: number;
    totalUsers: number;
  };
  recentActivities: any[];
  graphData: any[];
}

interface Borrow {
  id: string;
  userId: string;
  bookId: string;
  borrowDate: string;
  returnDate?: string;
  dueDate?: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'RETURNED' | 'OVERDUE' | 'RETURN_REQUESTED';
  user: {
    id: string;
    name: string;
    email: string;
    level?: string;
  };
  book: {
    id: string;
    title: string;
    author: string;
    ISBN: string;
    cover_image?: string;
  };
}

interface BorrowDetail {
  id: string;
  userId: string;
  bookId: string;
  borrowDate: string;
  returnDate?: string;
  status: string;
  user: {
    id: string;
    name: string;
    email: string;
    level?: string;
  };
  book: {
    id: string;
    title: string;
    author: string;
    ISBN: string;
    cover_image?: string;
  };
}

export default function LibrarianDashboard() {
  const router = useRouter();
  const { isAuthenticated, user, logout } = useAuthStore();
  const { showSuccess, showError, showWarning } = useGlobalNotification();
  const [searchQuery, setSearchQuery] = useState("");
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewingLoan, setViewingLoan] = useState<BorrowDetail | null>(null);
  const [dashboardStats, setDashboardStats] = useState<DashboardStats | null>(null);
  const [borrowsData, setBorrowsData] = useState<Borrow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isTableLoading, setIsTableLoading] = useState(false);
  const [isChartLoading, setIsChartLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [borrowedReturnedFilter, setBorrowedReturnedFilter] = useState<string>('5days');

  // Function to fetch dashboard stats
  const fetchDashboardStats = async (range: string) => {
    try {
      setIsChartLoading(true);
      const token = getAuthToken();

      if (!token || !isAuthenticated || user?.role !== 'LIBRARIAN') {
        logout();
        router.replace('/login');
        return;
      }

      const statsResponse = await fetch(`${API_URL}/admin/dashboard/stats?range=${range}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        setDashboardStats(statsData);
      } else {
        setError('Failed to fetch dashboard stats');
      }
    } catch (err) {
      console.error('Error fetching dashboard stats:', err);
      setError('Error loading dashboard stats');
    } finally {
      setIsChartLoading(false);
    }
  };

  // Fetch dashboard stats and borrows on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const token = getAuthToken();

        if (!token || !isAuthenticated || user?.role !== 'LIBRARIAN') {
          logout();
          router.replace('/login');
          return;
        }

        // Fetch dashboard stats with default filter
        await fetchDashboardStats('5days');

        // Fetch all borrows for the table
        const borrowsResponse = await fetch(`${API_URL}/admin/borrows`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (borrowsResponse.ok) {
          const borrowsDataResponse = await borrowsResponse.json();
          setBorrowsData(borrowsDataResponse.borrows || []);
        } else {
          setError('Failed to fetch dashboard data');
        }
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError('Error loading dashboard');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [router, isAuthenticated, user, logout]);

  // Fetch borrows when status filter changes
  useEffect(() => {
    if (statusFilter === '') return; // Skip on initial mount

    const fetchFilteredBorrows = async () => {
      try {
        setIsTableLoading(true);
        const token = getAuthToken();

        if (!token || !isAuthenticated || user?.role !== 'LIBRARIAN') {
          logout();
          router.replace('/login');
          return;
        }

        const borrowsUrl = `${API_URL}/admin/borrows?status=${encodeURIComponent(statusFilter)}`;
        const borrowsResponse = await fetch(borrowsUrl, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (borrowsResponse.ok) {
          const borrowsDataResponse = await borrowsResponse.json();
          setBorrowsData(borrowsDataResponse.borrows || []);
        }
      } catch (err) {
        console.error('Error fetching filtered borrows:', err);
      } finally {
        setIsTableLoading(false);
      }
    };

    fetchFilteredBorrows();
  }, [statusFilter, router]);

  // Re-fetch stats when filter changes
  useEffect(() => {
    if (!isLoading) {
      fetchDashboardStats(borrowedReturnedFilter);
    }
  }, [borrowedReturnedFilter]);

  const metrics = [
    {
      icon: BookOpen,
      title: "Total Books",
      value: dashboardStats?.stats.totalBooks.toLocaleString() || "48,350",
      subtitle: "This month",
      iconBgColor: "bg-blue-100",
    },
    {
      icon: BookMarked,
      title: "Borrowed books",
      value: dashboardStats?.stats.borrowedBooks.toLocaleString() || "48,350",
      subtitle: "This month",
      iconBgColor: "bg-blue-100",
    },
    {
      icon: AlertCircle,
      title: "Overdue items",
      value: dashboardStats?.stats.overdueBooks.toLocaleString() || "48,350",
      subtitle: "This month",
      iconBgColor: "bg-blue-100",
    },
    {
      icon: CheckCircle,
      title: "Returned items",
      value: dashboardStats?.stats.returnedBooks.toLocaleString() || "48,350",
      subtitle: "This month",
      iconBgColor: "bg-blue-100",
    },
    {
      icon: Users,
      title: "Total Users",
      value: dashboardStats?.stats.totalUsers.toLocaleString() || "48,350",
      subtitle: "This month",
      iconBgColor: "bg-blue-100",
    },
  ];

  // Filter borrows based on search query and map to table format (include PENDING for approval)
  const filteredData = borrowsData
    .filter(borrow =>
    (borrow.book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      borrow.book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      borrow.user.name.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .map(borrow => ({
      id: borrow.id,
      cover: borrow.book.cover_image,
      title: borrow.book.title,
      borrower: borrow.user.name,
      borrowDate: new Date(borrow.borrowDate).toLocaleDateString('en-GB'),
      returnDate: borrow.dueDate ? new Date(borrow.dueDate).toLocaleDateString('en-GB') : 'N/A',
      status: borrow.status === 'PENDING' ? 'Pending' as const :
        borrow.status === 'APPROVED' ? 'Active' as const :
          borrow.status === 'OVERDUE' ? 'Overdue' as const :
            borrow.status === 'RETURN_REQUESTED' ? 'Return Pending' as const :
              borrow.status === 'RETURNED' ? 'Returned' as const :
                borrow.status === 'REJECTED' ? 'Rejected' as const :
                  'Active' as const,
    }));

  const handleViewLoan = async (id: string) => {
    try {
      const token = getAuthToken();
      if (!token) {
        logout();
        router.replace('/login');
        return;
      }

      const response = await fetch(`${API_URL}/admin/borrows/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setViewingLoan(data);
        setIsViewModalOpen(true);
      }
    } catch (err) {
      console.error('Error fetching borrow details:', err);
    }
  };

  const handleApprove = async (id: string) => {
    try {
      const token = getAuthToken();
      if (!token) {
        logout();
        router.replace('/login');
        return;
      }

      const borrowRecord = borrowsData.find(b => b.id === id);
      if (!borrowRecord) {
        showError('Error', 'Borrow record not found');
        return;
      }

      if (borrowRecord.status !== 'PENDING') {
        showWarning(
          'Cannot Approve',
          `This borrow request cannot be approved. Current status: ${borrowRecord.status}. Only "Pending" requests can be approved.`
        );
        return;
      }

      const response = await fetch(`${API_URL}/admin/borrows/${id}/approve`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        showSuccess('Success', 'Borrow request approved successfully');
        // Refresh borrows list
        const borrowsResponse = await fetch(`${API_URL}/admin/borrows`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (borrowsResponse.ok) {
          const data = await borrowsResponse.json();
          setBorrowsData(data.borrows || []);
        }
      } else {
        const errorData = await response.json();
        showError('Approval Failed', errorData.message || 'Failed to approve borrow');
      }
    } catch (err) {
      console.error('Error approving borrow:', err);
      showError('Error', 'Error approving borrow');
    }
  };

  const handleReturn = async (id: string) => {
    try {
      const token = getAuthToken();
      if (!token) {
        logout();
        router.replace('/login');
        return;
      }

      const borrowRecord = borrowsData.find(b => b.id === id);
      if (!borrowRecord) {
        showError('Error', 'Borrow record not found');
        return;
      }

      if (borrowRecord.status !== 'RETURN_REQUESTED') {
        showWarning(
          'Cannot Approve Return',
          `This book cannot be returned. Current status: ${borrowRecord.status}. Only books with "Return Requested" status can be approved for return.`
        );
        return;
      }

      const response = await fetch(`${API_URL}/admin/borrows/${id}/return`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        showSuccess('Success', 'Book return approved successfully');
        // Refresh borrows list
        const borrowsResponse = await fetch(`${API_URL}/admin/borrows`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        if (borrowsResponse.ok) {
          const data = await borrowsResponse.json();
          setBorrowsData(data.borrows || []);
        }
      } else {
        const errorData = await response.json();
        showError('Return Failed', errorData.message || 'Failed to return book');
      }
    } catch (err) {
      console.error('Error returning book:', err);
      showError('Error', 'Error returning book');
    }
  };

  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      {isLoading && (
        <div className="w-full min-w-0">
          {/* Metrics Cards Skeleton */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-6 lg:mb-8">
            {Array.from({ length: 5 }).map((_, index) => (
              <StatCardSkeleton key={index} />
            ))}
          </div>

          {/* Charts and Activity Section Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
            <ChartSkeleton title="Borrowed vs Returned" type="area" />
            <RecentActivitySkeleton />
          </div>

          {/* Book Loans Table Skeleton */}
          <TableSkeleton rows={8} columns={7} />
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {!isLoading && !error && (
        <div className="w-full min-w-0">
          {/* Metrics Cards - Single Line */}
          <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className="w-full min-w-0">
                <MetricCard
                  icon={metric.icon}
                  title={metric.title}
                  value={metric.value}
                  subtitle={metric.subtitle}
                  iconBgColor={metric.iconBgColor}
                />
              </div>
            ))}
          </div>

          {/* Chart and Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 mb-8">
            <div className="lg:col-span-3 min-w-0">
              <BorrowedReturnedChart 
                graphData={dashboardStats?.graphData || []} 
                currentFilter={borrowedReturnedFilter}
                onFilterChange={setBorrowedReturnedFilter}
                isLoading={isChartLoading}
              />
            </div>
            <div className="lg:col-span-2 min-w-0 max-h-[500px]">
              <RecentActivity activities={dashboardStats?.recentActivities || []} userRole="LIBRARIAN" />
            </div>
          </div>

          {/* Book Loans Table */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm w-full min-w-0 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6 items-start md:items-center">
              <div className="w-full md:w-1/2 flex items-center gap-3 border-2 border-gray-300 rounded-lg px-4 py-2 bg-white min-w-0">
                <Search className="h-5 w-5 text-gray-400 shrink-0" />
                <input
                  type="text"
                  placeholder="search books"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none text-gray-900 placeholder-gray-400 text-sm min-w-0"
                />
              </div>
              <div className="flex-1 hidden md:block" />
              <div className="relative">
                <button 
                  onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
                  className="bg-white border-2 border-gray-300 text-gray-900 px-4 sm:px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 font-medium text-sm shrink-0">
                  <Filter className="h-5 w-5" />
                  Filters
                </button>
                {isFilterDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <button
                      onClick={() => {
                        setStatusFilter('');
                        setIsFilterDropdownOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      All Status
                    </button>
                    <button
                      onClick={() => {
                        setStatusFilter('PENDING');
                        setIsFilterDropdownOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Pending
                    </button>
                    <button
                      onClick={() => {
                        setStatusFilter('APPROVED');
                        setIsFilterDropdownOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Approved
                    </button>
                    <button
                      onClick={() => {
                        setStatusFilter('OVERDUE');
                        setIsFilterDropdownOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Overdue
                    </button>
                    <button
                      onClick={() => {
                        setStatusFilter('RETURNED');
                        setIsFilterDropdownOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Returned
                    </button>
                    <button
                      onClick={() => {
                        setStatusFilter('RETURN_REQUESTED');
                        setIsFilterDropdownOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Return Pending
                    </button>
                    <button
                      onClick={() => {
                        setStatusFilter('REJECTED');
                        setIsFilterDropdownOpen(false);
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      Rejected
                    </button>
                  </div>
                )}
              </div>
            </div>

            <ViewBookLoanModal
              isOpen={isViewModalOpen}
              loan={viewingLoan}
              onClose={() => {
                setIsViewModalOpen(false);
                setViewingLoan(null);
              }}
              onApprove={handleApprove}
              onReturn={handleReturn}
            />

            <div className="w-full min-w-0 overflow-hidden">
              <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                {isTableLoading ? (
                  <TableSkeleton rows={8} columns={7} />
                ) : (
                  <BookLoansTable
                    data={filteredData as any}
                    onView={handleViewLoan}
                    onApprove={handleApprove}
                    onReturn={handleReturn}
                    isLoading={false}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}