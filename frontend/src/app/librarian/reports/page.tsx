'use client';

import { Search, BookOpen, Download, ChevronDown, Users, TrendingUp, AlertCircle, Calendar, X } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useGlobalNotification } from '@/hooks/useGlobalNotification';
import { API_URL } from "@/lib/config";
import { StatCardSkeleton } from "@/components/SkeletonLoaders";

interface ReportCard {
  id: string;
  title: string;
  description: string;
  formats: string[];
  icon: any;
  endpoint: string;
  count?: number;
}

interface DashboardStats {
  stats: {
    totalBooks: number;
    borrowedBooks: number;
    overdueBooks: number;
    returnedBooks: number;
    totalUsers: number;
  };
}

export default function ReportsPage() {
  const router = useRouter();
  const { showSuccess, showError } = useGlobalNotification();
  const [searchQuery, setSearchQuery] = useState("");
  const [timeRange, setTimeRange] = useState("all");
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dashboardStats, setDashboardStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshingStats, setIsRefreshingStats] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState<string | null>(null);

  // Fetch dashboard stats for report counts - only when timeRange changes (not custom)
  useEffect(() => {
    if (timeRange !== 'custom') {
      const fetchStats = async () => {
        try {
          setIsLoading(true);
          const token = localStorage.getItem('access_token');

          if (!token) {
            router.push('/');
            return;
          }

          // Build query parameters based on timeRange
          let queryParams = '';
          if (timeRange !== 'all') {
            queryParams = `?range=${timeRange}`;
          }

          const response = await fetch(`${API_URL}/admin/dashboard/stats${queryParams}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            setDashboardStats(data);
            setError(null);
          } else {
            setError('Failed to fetch statistics');
          }
        } catch (err) {
          console.error('Error fetching stats:', err);
          setError('Error loading statistics');
        } finally {
          setIsLoading(false);
        }
      };

      fetchStats();
    }
  }, [router, timeRange]);

  // Function to manually refresh stats when custom dates are set
  const handleQueryReports = async () => {
    if (timeRange === 'custom' && (!startDate || !endDate)) {
      showError('Invalid Date Range', 'Please select both start and end dates');
      return;
    }

    try {
      setIsRefreshingStats(true);
      const token = localStorage.getItem('access_token');

      if (!token) {
        router.push('/');
        return;
      }

      let queryParams = '';
      if (timeRange === 'custom' && startDate && endDate) {
        queryParams = `?startDate=${startDate}&endDate=${endDate}`;
      } else if (timeRange !== 'all') {
        queryParams = `?range=${timeRange}`;
      }

      const response = await fetch(`${API_URL}/admin/dashboard/stats${queryParams}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDashboardStats(data);
        setError(null);
        showSuccess('Reports Updated', 'Report data has been refreshed successfully');
      } else {
        showError('Failed to Refresh', 'Could not refresh report data. Please try again.');
      }
    } catch (err) {
      console.error('Error refreshing stats:', err);
      showError('Refresh Error', 'An error occurred while refreshing reports');
    } finally {
      setIsRefreshingStats(false);
    }
  };

  const reports: ReportCard[] = useMemo(() => {
    // Calculate counts based on actual fetched data
    let borrowedCount = 0;
    let overdueCount = 0;
    let returnedCount = 0;
    let totalUsersCount = dashboardStats?.stats.totalUsers || 0;
    let totalBooksCount = dashboardStats?.stats.totalBooks || 0;

    // If we have stats, we can derive counts from the actual data
    // For now, use the stats but these will be recalculated when reports are generated
    if (dashboardStats?.stats) {
      borrowedCount = dashboardStats.stats.borrowedBooks;
      overdueCount = dashboardStats.stats.overdueBooks;
      returnedCount = dashboardStats.stats.returnedBooks;
    }

    return [
      {
        id: "borrowed-books",
        title: "Borrowed Books Report",
        description: "List of all currently borrowed books with borrower details and due dates",
        formats: ["CSV", "PDF"],
        icon: BookOpen,
        endpoint: "/admin/borrows?status=APPROVED",
        count: borrowedCount,
      },
      {
        id: "overdue-books",
        title: "Overdue Books Report",
        description: "List of all overdue books with borrower contact information",
        formats: ["CSV", "PDF"],
        icon: AlertCircle,
        endpoint: "/admin/borrows?status=OVERDUE",
        count: overdueCount,
      },
      {
        id: "borrower-activity",
        title: "Borrower Activity Report",
        description: "Borrowing history and activity statistics for all borrowers",
        formats: ["CSV", "PDF"],
        icon: Users,
        endpoint: "/admin/users",
        count: totalUsersCount,
      },
      {
        id: "popular-books",
        title: "Popular Books Report",
        description: "Most borrowed books ranked by popularity and frequency",
        formats: ["CSV", "PDF"],
        icon: TrendingUp,
        endpoint: "/admin/books",
        count: totalBooksCount,
      },
      {
        id: "returned-books",
        title: "Returned Books Report",
        description: "List of all returned books with return dates and borrower details",
        formats: ["CSV", "PDF"],
        icon: Calendar,
        endpoint: "/admin/borrows?status=RETURNED",
        count: returnedCount,
      },
      {
        id: "library-inventory",
        title: "Library Inventory Report",
        description: "Complete inventory of all books with stock levels and availability",
        formats: ["CSV", "PDF"],
        icon: BookOpen,
        endpoint: "/admin/books",
        count: totalBooksCount,
      },
    ];
  }, [dashboardStats]);

  const timeRangeOptions = [
    { value: "all", label: "All time" },
    { value: "today", label: "Today" },
    { value: "week", label: "This week" },
    { value: "month", label: "This month" },
    { value: "year", label: "This year" },
    { value: "custom", label: "Custom date range" },
  ];

  const filteredReports = reports.filter(report =>
    report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const generateReport = async (report: ReportCard, format: string) => {
    try {
      setIsGenerating(`${report.id}-${format}`);
      const token = localStorage.getItem('access_token');

      if (!token) {
        router.push('/');
        return;
      }

      // Build query parameters based on timeRange and custom dates
      let endpoint = report.endpoint;
      const separator = endpoint.includes('?') ? '&' : '?';
      let queryParams = '';

      if (timeRange === 'custom' && startDate && endDate) {
        queryParams = `${separator}startDate=${startDate}&endDate=${endDate}`;
      } else if (timeRange !== 'all') {
        queryParams = `${separator}range=${timeRange}`;
      }

      const response = await fetch(`${API_URL}${endpoint}${queryParams}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();

        // Update report counts based on actual data
        const updatedReports = reports.map(r => {
          if (r.id === report.id) {
            let count = 0;
            if (report.id === 'borrowed-books' || report.id === 'overdue-books' || report.id === 'returned-books') {
              count = (data.borrows || []).length;
            } else if (report.id === 'borrower-activity') {
              count = (data.users || []).length;
            } else if (report.id === 'popular-books' || report.id === 'library-inventory') {
              count = (data.books || []).length;
            }
            return { ...r, count };
          }
          return r;
        });

        // Update the reports state to reflect new counts
        // We need to update dashboardStats to trigger re-render
        setDashboardStats(prev => {
          if (!prev) return prev;
          return {
            ...prev,
            stats: {
              ...prev.stats,
              borrowedBooks: updatedReports.find(r => r.id === 'borrowed-books')?.count || prev.stats.borrowedBooks,
              overdueBooks: updatedReports.find(r => r.id === 'overdue-books')?.count || prev.stats.overdueBooks,
              returnedBooks: updatedReports.find(r => r.id === 'returned-books')?.count || prev.stats.returnedBooks,
              totalUsers: updatedReports.find(r => r.id === 'borrower-activity')?.count || prev.stats.totalUsers,
              totalBooks: updatedReports.find(r => r.id === 'popular-books')?.count || prev.stats.totalBooks,
            }
          };
        });

        if (format === 'CSV') {
          generateCSV(data, report);
        } else if (format === 'PDF') {
          generatePDF(data, report);
        }
        showSuccess('Report Generated', `${report.title} has been generated successfully in ${format} format.`);
      } else {
        showError('Report Generation Failed', 'Failed to generate report. Please try again.');
      }
    } catch (err) {
      console.error('Error generating report:', err);
      showError('Report Generation Error', 'An error occurred while generating the report. Please try again.');
    } finally {
      setIsGenerating(null);
    }
  };

  const generateCSV = (data: any, report: ReportCard) => {
    let csvContent = '';
    let rows: any[] = [];


    switch (report.id) {
      case 'borrowed-books':
      case 'overdue-books':
      case 'returned-books':
        csvContent = 'Book Title,Author,ISBN,Borrower,Email,Borrow Date,Return Date,Status\n';
        rows = data.borrows || [];
        rows.forEach((borrow: any) => {
          csvContent += `"${borrow.book.title}","${borrow.book.author}","${borrow.book.ISBN}","${borrow.user.name}","${borrow.user.email}","${new Date(borrow.borrowDate).toLocaleDateString()}","${borrow.returnDate ? new Date(borrow.returnDate).toLocaleDateString() : 'Not returned'}","${borrow.status}"\n`;
        });
        break;
      case 'borrower-activity':
        csvContent = 'Name,Email,Role,Level,Member Since,Total Borrows\n';
        rows = data.users || [];
        rows.forEach((user: any) => {
          const level = user.level || 'Not Set';
          csvContent += `"${user.name}","${user.email}","${user.role}","${level}","${new Date(user.createdAt).toLocaleDateString()}","0"\n`;
        });
        break;
      case 'popular-books':
      case 'library-inventory':
        csvContent = 'Title,Author,ISBN,Publisher,Available Copies,Borrowed Copies,Total Copies,Status\n';
        rows = data.books || [];
        rows.forEach((book: any) => {
          const totalCopies = book.totalCopies || 0;
          const availableCopies = book.availableCopies || 0;
          const borrowedCopies = totalCopies - availableCopies;
          const status = availableCopies > 0 ? 'Available' : 'Unavailable';
          csvContent += `"${book.title}","${book.author}","${book.ISBN || 'N/A'}","${book.publisher || book.genre || 'N/A'}","${availableCopies}","${borrowedCopies}","${totalCopies}","${status}"\n`;
        });
        break;
    }

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${report.title.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const generatePDF = (data: any, report: ReportCard) => {
    // For now, we'll create a simple HTML content and open it in a new window for printing
    let htmlContent = `
      <html>
        <head>
          <title>${report.title}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            h1 { color: #001240; border-bottom: 2px solid #001240; padding-bottom: 10px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #001240; color: white; }
            .report-info { margin-bottom: 20px; color: #666; }
          </style>
        </head>
        <body>
          <h1>${report.title}</h1>
          <div class="report-info">
            <p><strong>Generated:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Description:</strong> ${report.description}</p>
          </div>
          <table>
    `;

    let rows: any[] = [];
    switch (report.id) {
      case 'borrowed-books':
      case 'overdue-books':
      case 'returned-books':
        htmlContent += '<tr><th>Book Title</th><th>Author</th><th>Borrower</th><th>Email</th><th>Borrow Date</th><th>Status</th></tr>';
        rows = data.borrows || [];
        rows.forEach((borrow: any) => {
          htmlContent += `<tr>
            <td>${borrow.book.title}</td>
            <td>${borrow.book.author}</td>
            <td>${borrow.user.name}</td>
            <td>${borrow.user.email}</td>
            <td>${new Date(borrow.borrowDate).toLocaleDateString()}</td>
            <td>${borrow.status}</td>
          </tr>`;
        });
        break;
      case 'borrower-activity':
        htmlContent += '<tr><th>Name</th><th>Email</th><th>Role</th><th>Level</th><th>Member Since</th></tr>';
        rows = data.users || [];
        rows.forEach((user: any) => {
          const level = user.level || 'Not Set';
          htmlContent += `<tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>${level}</td>
            <td>${new Date(user.createdAt).toLocaleDateString()}</td>
          </tr>`;
        });
        break;
      case 'popular-books':
      case 'library-inventory':
        htmlContent += '<tr><th>Title</th><th>Author</th><th>ISBN</th><th>Available</th><th>Borrowed</th><th>Total</th><th>Status</th></tr>';
        rows = data.books || [];
        rows.forEach((book: any) => {
          const totalCopies = book.totalCopies || 0;
          const availableCopies = book.availableCopies || 0;
          const borrowedCopies = totalCopies - availableCopies;
          const status = availableCopies > 0 ? 'Available' : 'Unavailable';
          htmlContent += `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.ISBN || 'N/A'}</td>
            <td>${availableCopies}</td>
            <td>${borrowedCopies}</td>
            <td>${totalCopies}</td>
            <td>${status}</td>
          </tr>`;
        });
        break;
    }

    htmlContent += '</table></body></html>';

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 250);
    }
  };

  return (
    <div className="w-full">
      {isLoading && (
        <div className="w-full">
          {/* Search and filter skeleton */}
          <div className="flex gap-4 mb-8 items-center">
            <div className="w-1/2 h-10 bg-gray-200 rounded-lg animate-pulse" />
            <div className="flex-1 hidden md:block" />
            <div className="w-32 h-10 bg-gray-200 rounded-lg animate-pulse" />
          </div>

          {/* Report cards skeleton grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-1 rounded-sm">
                    <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
                  </div>
                  <div className="ml-auto">
                    <div className="h-6 w-20 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>

                <div className="h-6 w-32 bg-gray-200 rounded mb-2 animate-pulse" />
                <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse" />
                <div className="h-4 w-3/4 bg-gray-200 rounded mb-4 animate-pulse" />

                <div className="flex items-center justify-between">
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                  <div className="flex gap-2">
                    <div className="h-8 w-16 bg-gray-200 rounded animate-pulse" />
                    <div className="h-8 w-16 bg-gray-200 rounded animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {!isLoading && !error && (
        <>
          <div className="flex gap-4 mb-8 items-center">
            <div className="w-1/2 flex items-center gap-3 border-2 border-gray-300 rounded-lg px-4 py-2 bg-white">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="search report"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 outline-none text-gray-900 placeholder-gray-400 text-sm"
              />
            </div>
            <div className="flex-1 hidden md:block" />
            <div className="relative">
              <button
                onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                className="w-full md:w-auto bg-white border-2 border-gray-300 text-gray-900 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 font-medium text-sm">
                {timeRangeOptions.find(option => option.value === timeRange)?.label || 'All time'}
                <ChevronDown className="h-4 w-4" />
              </button>
              {isTimeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  {timeRangeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setTimeRange(option.value);
                        setIsTimeDropdownOpen(false);
                        if (option.value === 'custom') {
                          setShowDatePicker(true);
                        }
                      }}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Custom Date Range Picker */}
          {showDatePicker && timeRange === 'custom' && (
            <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: '#001240', borderColor: '#001240' }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-white">Select Date Range</h3>
                <button
                  onClick={() => {
                    setShowDatePicker(false);
                    setTimeRange('all');
                    setStartDate('');
                    setEndDate('');
                  }}
                  className="text-white hover:text-gray-200"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none placeholder:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none placeholder:text-white"
                  />
                </div>
              </div>
              {startDate && endDate && (
                <div className="flex items-center justify-between">
                  <p className="text-sm text-white">
                    📅 Generating reports for: <strong>{new Date(startDate).toLocaleDateString()} to {new Date(endDate).toLocaleDateString()}</strong>
                  </p>
                  <button
                    onClick={handleQueryReports}
                    disabled={isRefreshingStats}
                    className="px-4 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm"
                  >
                    {isRefreshingStats ? 'Querying...' : 'Query Reports'}
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredReports.map((report) => {
              return (
                <div key={report.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-1 rounded-sm">
                      <img
                        src="/assets/reports.png"
                        alt="Report icon"
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                    {report.count !== undefined && (
                      <div className="ml-auto">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-[3px] text-xs font-medium bg-gray-100 text-blue-800">
                          {report.count} records
                        </span>
                      </div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{report.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{report.description}</p>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">Formats: {report.formats.join(", ")}</p>
                    <div className="flex gap-2">
                      {report.formats.map((format) => (
                        <button
                          key={format}
                          onClick={() => generateReport(report, format)}
                          disabled={isGenerating === `${report.id}-${format}`}
                          className="bg-white border-2 border-gray-300 text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1 font-medium text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isGenerating === `${report.id}-${format}` ? (
                            <img
                              src="/assets/logo.png"
                              alt="Loading"
                              className="h-3 w-3 object-contain"
                            />
                          ) : (
                            <Download className="h-3 w-3" />
                          )}
                          {format}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredReports.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-gray-600 font-medium mb-2">No reports found</p>
              <p className="text-sm text-gray-500">Try adjusting your search terms</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
