import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import '@/index.css';
import { Providers } from '@/components/Providers';
import { Toaster } from '@/components/ui/sonner';

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: 'RCA Management System',
  description: 'Rwanda Coding Academy Discipline & Library Management System',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanist.variable} font-sans`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
