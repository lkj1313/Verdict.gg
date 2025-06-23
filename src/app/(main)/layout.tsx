// app/(main)/layout.tsx
import type { ReactNode } from 'react';
import Footer from '@/shared/ui/footer/Footer';
import Header from '@/shared/ui/header/Header';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-grow bg-gray-100 p-10">{children}</main>
      <Footer />
    </>
  );
}
