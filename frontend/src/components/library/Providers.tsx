'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { queryClient } from '@/lib/queryClient';
import { NotificationProvider } from '@/contexts/NotificationContext';
import NotificationToast from '@/components/NotificationToast';
import { useRealtimeNotifications } from '@/hooks/useRealtimeNotifications';

interface ProvidersProps {
  children: React.ReactNode;
}

function RealtimeProvider({ children }: { children: React.ReactNode }) {
  useRealtimeNotifications();
  return <>{children}</>;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NotificationProvider>
          <RealtimeProvider>
            {children}
            <NotificationToast />
            {process.env.NODE_ENV === 'development' && (
              <ReactQueryDevtools initialIsOpen={false} />
            )}
          </RealtimeProvider>
        </NotificationProvider>
      </QueryClientProvider>
    </Provider>
  );
}