'use client';

import { Edit2, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/config";
import { ProfileFormSkeleton, FormFieldSkeleton } from "@/components/SkeletonLoaders";

interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: string;
}

export default function LibrarianProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [passwordSuccess, setPasswordSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const router = useRouter();

  // Fetch user profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem('access_token');

        if (!token) {
          router.push('/');
          return;
        }

        const response = await fetch(`${API_URL}/auth/me`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProfile(data.user);
          setFormData({
            name: data.user.name || '',
            email: data.user.email || '',
          });
        } else {
          setError('Failed to load profile');
        }
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError('Error loading profile');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangePassword = async () => {
    try {
      setPasswordError(null);
      setPasswordSuccess(null);

      // Validation
      if (!passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword) {
        setPasswordError('All fields are required');
        return;
      }

      if (passwordData.newPassword !== passwordData.confirmPassword) {
        setPasswordError('New passwords do not match');
        return;
      }

      if (passwordData.newPassword.length < 6) {
        setPasswordError('New password must be at least 6 characters');
        return;
      }

      setIsChangingPassword(true);
      const token = localStorage.getItem('access_token');

      if (!token) {
        router.push('/');
        return;
      }

      const response = await fetch(`${API_URL}/auth/change-password`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          currentPassword: passwordData.currentPassword,
          newPassword: passwordData.newPassword,
        }),
      });

      if (response.ok) {
        setPasswordSuccess('Password changed successfully');
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        });
      } else {
        const errorData = await response.json();
        setPasswordError(errorData.message || 'Failed to change password');
      }
    } catch (err) {
      console.error('Error changing password:', err);
      setPasswordError('Failed to change password');
    } finally {
      setIsChangingPassword(false);
    }
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      setError(null);
      const token = localStorage.getItem('access_token');

      if (!token) {
        router.push('/');
        return;
      }

      // Call the backend API to update profile
      const response = await fetch(`${API_URL}/auth/profile`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setProfile(data.user);
        setIsEditing(false);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to save profile');
      }
    } catch (err) {
      console.error('Error saving profile:', err);
      setError('Failed to save profile');
    } finally {
      setIsSaving(false);
    }
  };

  const handleLogout = async () => {
    try {
      setIsSigningOut(true);
      const token = localStorage.getItem('access_token');

      if (token) {
        await fetch(`${API_URL}/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
      }

      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      router.push('/');
    } catch (err) {
      console.error('Error logging out:', err);
      router.push('/');
    }
  };

  if (isLoading) {
    return (
      <div>
        <ProfileFormSkeleton />
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8 mt-8">
          <div className="bg-gray-200 h-6 w-40 rounded mb-6 animate-pulse" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormFieldSkeleton />
            <FormFieldSkeleton />
            <FormFieldSkeleton />
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="bg-gray-200 h-6 w-40 rounded mb-6 animate-pulse" />
          <div className="bg-gray-200 h-4 w-64 rounded mb-4 animate-pulse" />
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <p className="text-red-600">{error || 'Failed to load profile'}</p>
      </div>
    );
  }

  const initials = profile.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <div>
      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-600">{initials}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
              <p className="text-gray-600">{profile.role}</p>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Edit2 className="h-4 w-4" />
            Edit
          </button>
        </div>
      </div>

      {/* Personal Information */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Edit2 className="h-4 w-4" />
            Edit
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            ) : (
              <p className="text-gray-900 font-medium">{profile.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            ) : (
              <p className="text-gray-900 font-medium">{profile.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
            <p className="text-gray-900 font-medium">{profile.role}</p>
          </div>
        </div>

        {isEditing && (
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="px-6 py-2 text-white rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50"
              style={{ backgroundColor: "#001240" }}
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Password & Security */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Password & Security</h3>
        </div>

        <div className="mb-8">
          <p className="text-gray-600 mb-6">Change your password to keep your account secure.</p>

          {passwordError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{passwordError}</p>
            </div>
          )}

          {passwordSuccess && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-600 text-sm">{passwordSuccess}</p>
            </div>
          )}

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                placeholder="Enter your current password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                placeholder="Enter your new password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                placeholder="Confirm your new password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <button
            onClick={handleChangePassword}
            disabled={isChangingPassword}
            className="px-6 py-2 text-white rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 mb-8"
            style={{ backgroundColor: "#001240" }}
          >
            {isChangingPassword ? 'Changing Password...' : 'Change Password'}
          </button>
        </div>

        <hr className="my-6" />

        <div className="mt-6">
          <p className="text-gray-600 mb-4">Sign out from your account.</p>
          <button
            onClick={handleLogout}
            disabled={isSigningOut}
            className="flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSigningOut ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Signing out...
              </>
            ) : (
              'Sign out'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}