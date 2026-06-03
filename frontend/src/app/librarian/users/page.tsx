'use client';

import UsersTable from "@/components/UsersTable";
import ViewUserModal from "@/components/ViewUserModal";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePagination } from "@/hooks/usePagination";
import { API_URL } from "@/lib/config";
import { TableRowSkeleton } from "@/components/SkeletonLoaders";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
}

interface UserDetail {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    level?: string;
    createdAt: string;
  };
  statistics: {
    totalBorrowed: number;
    currentlyBorrowed: number;
    overdueCount: number;
    returnedCount: number;
    approvedCount: number;
    pendingCount: number;
    rejectedCount: number;
  };
  currentBorrows: any[];
  borrowHistory: any[];
}

export default function UsersPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [viewingUser, setViewingUser] = useState<UserDetail | null>(null);
  const [usersData, setUsersData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch users on mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem('access_token');

        if (!token) {
          router.push('/');
          return;
        }

        const response = await fetch(`${API_URL}/admin/users`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUsersData(data.users || []);
        } else {
          setError('Failed to fetch users');
        }
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Error loading users');
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [router]);

  // Filter users based on search query and exclude admin
  const filteredData = usersData
    .filter(user => user.role !== 'LIBRARIAN') // Exclude admin/librarian
    .filter(user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role === 'STUDENT' ? 'Student' : user.role,
      loans: 0, // Will be fetched when viewing user details
      status: 'Active' as const,
    }));

  const {
    currentPage,
    totalPages,
    itemsPerPage,
    paginatedData,
    totalItems,
    handlePageChange,
  } = usePagination({ data: filteredData, initialItemsPerPage: 10 });

  const handleViewUser = async (id: string) => {
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        router.push('/');
        return;
      }

      const response = await fetch(`${API_URL}/admin/users/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setViewingUser(data);
        setIsViewModalOpen(true);
      }
    } catch (err) {
      console.error('Error fetching user details:', err);
    }
  };

  return (
    <div className="w-full">
      {isLoading && (
        <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Role</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <TableRowSkeleton key={i} />
              ))}
            </tbody>
          </table>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {!isLoading && !error && (
        <>
          <div className="flex gap-4 mb-6 items-center">
            <div className="w-1/2 flex items-center gap-3 border-2 border-gray-300 rounded-lg px-4 py-2 bg-white">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="search users"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 outline-none text-gray-900 placeholder-gray-400 text-sm"
              />
            </div>
          </div>

          <ViewUserModal
            isOpen={isViewModalOpen}
            user={viewingUser}
            onClose={() => {
              setIsViewModalOpen(false);
              setViewingUser(null);
            }}
          />

          <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
            <UsersTable
              data={paginatedData}
              onView={handleViewUser}
            />

            <div className="mt-8 flex items-center justify-between px-8 py-6">
              <p className="text-sm text-gray-600">Showing {paginatedData.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} results</p>
              <div className="flex gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${page === currentPage
                        ? 'bg-slate-900 text-white'
                        : 'border border-gray-300 hover:bg-gray-50'
                      }`}>
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
