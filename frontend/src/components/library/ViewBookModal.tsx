'use client';

import { X, ChevronDown, ChevronUp, Loader2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { API_URL } from '@/lib/config';

interface Borrower {
  id: string;
  name: string;
  email: string;
  borrowDate: string;
  dueDate: string;
  status: string;
}

interface ViewBookModalProps {
  isOpen: boolean;
  book: {
    id: string;
    title: string;
    isbn: string;
    author: string;
    genre: string;
    stock: string;
    availability: 'Available' | 'Borrowed';
    cover?: string;
    description?: string;
  } | null;
  onClose: () => void;
}

export default function ViewBookModal({ isOpen, book, onClose }: ViewBookModalProps) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isTitleExpanded, setIsTitleExpanded] = useState(false);
  const [borrowers, setBorrowers] = useState<Borrower[]>([]);
  const [isLoadingBorrowers, setIsLoadingBorrowers] = useState(false);

  // Fetch borrowers when modal opens
  useEffect(() => {
    if (isOpen && book?.id) {
      fetchBorrowers();
    }
  }, [isOpen, book?.id]);

  const fetchBorrowers = async () => {
    try {
      setIsLoadingBorrowers(true);
      const token = localStorage.getItem('access_token');
      if (!token) return;

      const response = await fetch(
        `${API_URL}/admin/borrows?bookId=${book?.id}&status=APPROVED,OVERDUE`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const borrowersList = (data.borrows || []).map((borrow: any) => ({
          id: borrow.id,
          name: borrow.user?.name || 'Unknown',
          email: borrow.user?.email || 'N/A',
          borrowDate: new Date(borrow.borrowDate).toLocaleDateString('en-GB'),
          dueDate: borrow.dueDate ? new Date(borrow.dueDate).toLocaleDateString('en-GB') : 'N/A',
          status: borrow.status,
        }));
        setBorrowers(borrowersList);
      }
    } catch (err) {
      console.error('Error fetching borrowers:', err);
    } finally {
      setIsLoadingBorrowers(false);
    }
  };

  if (!isOpen || !book) return null;

  const shouldTruncateTitle = book.title.length > 50;
  const shouldTruncateDescription = book.description && book.description.length > 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blur background */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4" style={{ backgroundColor: '#001240' }}>
          <h2 className="text-lg font-bold text-white">Book details</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Book Cover */}
            <div className="shrink-0">
              <div className="w-40 h-56 bg-gray-300 rounded-lg overflow-hidden">
                {book.cover ? (
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full bg-linear-to-br from-amber-200 to-amber-400 flex items-center justify-center">
                          <span class="text-4xl font-bold text-amber-900">
                            ${book.title.charAt(0)}
                          </span>
                        </div>
                      `;
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-amber-200 to-amber-400 flex items-center justify-center">
                    <span className="text-4xl font-bold text-amber-900">
                      {book.title.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div className={`w-2 h-2 rounded-full ${book.availability === 'Available' ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className={`text-sm font-medium ${book.availability === 'Available' ? 'text-green-600' : 'text-red-600'}`}>{book.availability}</span>
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <p className="text-sm font-medium text-gray-600">Book Title</p>
                <div className="text-sm font-semibold text-gray-900">
                  {shouldTruncateTitle && !isTitleExpanded ? (
                    <div className="space-y-1">
                      <p className="truncate">{book.title}</p>
                      <button
                        onClick={() => setIsTitleExpanded(true)}
                        className="text-blue-600 hover:text-blue-700 text-xs flex items-center gap-1 cursor-pointer"
                      >
                        More <ChevronDown className="h-3 w-3" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <p className="break-words">{book.title}</p>
                      {shouldTruncateTitle && (
                        <button
                          onClick={() => setIsTitleExpanded(false)}
                          className="text-blue-600 hover:text-blue-700 text-xs flex items-center gap-1 cursor-pointer"
                        >
                          Less <ChevronUp className="h-3 w-3" />
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <p className="text-sm font-medium text-gray-600">ISBN</p>
                <p className="text-sm font-semibold text-gray-900">{book.isbn}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <p className="text-sm font-medium text-gray-600">Author</p>
                <p className="text-sm font-semibold text-gray-900">{book.author}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <p className="text-sm font-medium text-gray-600">Genre</p>
                <p className="text-sm font-semibold text-gray-900">{book.genre}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <p className="text-sm font-medium text-gray-600">Stock</p>
                <p className="text-sm font-semibold text-gray-900">{book.stock}</p>
              </div>
              {book.description && (
                <div className="grid grid-cols-2 gap-4">
                  <p className="text-sm font-medium text-gray-600">Description</p>
                  <div className="text-sm text-gray-900">
                    {shouldTruncateDescription && !isDescriptionExpanded ? (
                      <div className="space-y-1">
                        <p className="truncate">{book.description}</p>
                        <button
                          onClick={() => setIsDescriptionExpanded(true)}
                          className="text-blue-600 hover:text-blue-700 text-xs flex items-center gap-1 cursor-pointer"
                        >
                          More <ChevronDown className="h-3 w-3" />
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <p className="break-words">{book.description}</p>
                        {shouldTruncateDescription && (
                          <button
                            onClick={() => setIsDescriptionExpanded(false)}
                            className="text-blue-600 hover:text-blue-700 text-xs flex items-center gap-1 cursor-pointer"
                          >
                            Less <ChevronUp className="h-3 w-3" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Borrowers Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Current Borrowers</h3>
              {!isLoadingBorrowers && borrowers.length > 0 && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {borrowers.length} {borrowers.length === 1 ? 'copy' : 'copies'} borrowed
                </span>
              )}
            </div>
            {isLoadingBorrowers ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
              </div>
            ) : borrowers.length > 0 ? (
              <div className="space-y-3">
                {borrowers.map((borrower) => (
                  <div key={borrower.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-medium text-gray-600 mb-1">Borrower Name</p>
                        <p className="text-sm font-semibold text-gray-900">{borrower.name}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-600 mb-1">Email</p>
                        <p className="text-sm font-semibold text-gray-900 truncate">{borrower.email}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-600 mb-1">Borrow Date</p>
                        <p className="text-sm font-semibold text-gray-900">{borrower.borrowDate}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-600 mb-1">Due Date</p>
                        <p className="text-sm font-semibold text-gray-900">{borrower.dueDate}</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-600 mb-1">Status</p>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          borrower.status === 'OVERDUE' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {borrower.status === 'OVERDUE' ? 'Overdue' : 'Active'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-600 py-4">No active borrowers for this book</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
