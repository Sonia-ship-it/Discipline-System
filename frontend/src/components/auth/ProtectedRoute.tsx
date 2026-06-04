'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/stores/authStore';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isAuthenticated, hydrated, user } = useAuthStore();
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        // Only check authentication after hydration is complete
        if (!mounted || !hydrated) return;
        
        // Check if user is authenticated
        if (!isAuthenticated || !user) {
            console.log('[ProtectedRoute] Not authenticated, redirecting to login');
            router.replace('/login');
        }
    }, [mounted, hydrated, isAuthenticated, user, router]);

    // Show loading while mounting or hydrating
    if (!mounted || !hydrated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0A0E2E]">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    // Show loading if not authenticated (will redirect)
    if (!isAuthenticated || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0A0E2E]">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return <>{children}</>;
}
