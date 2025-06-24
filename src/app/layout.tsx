import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Verdict.gg – 롤 재판소',
  description:
    '롤 유저들이 직접 영상을 보고 유죄인지 무죄인지 판결하는 커뮤니티 플랫폼',
  icons: {
    icon: '/favicon.png',
  },
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full">
      <body
        className={`${inter.variable} antialiased flex flex-col min-h-dvh `}
      >
        <div className="flex flex-col flex-grow w-full h-dvh max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100 ">
          {children}
        </div>
      </body>
    </html>
  );
}
