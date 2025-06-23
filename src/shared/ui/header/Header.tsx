// src/shared/ui/header/index.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Input } from '@/components/common';
import { Pencil } from 'lucide-react';
import ProfileMenu from '@/feature/profile/ui/ProfileMenu';
import NotificationMenu from '@/feature/notification/ui/NotificationMenu';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="w-full border-b-2 shadow-sm rounded-lg py-4">
      <div className="w-full flex justify-between  items-center p-5">
        <Link href="/" className="inline-block">
          <h1 className="text-xl xs:text-4xl font-bold tracking-tight text-primary">
            Verdict.gg
          </h1>
        </Link>
        {/* 가운데 인풋 */}
        <div className="hidden sm:block flex-1 px-8">
          <Input type="text" placeholder="검색해보세요..." />
        </div>
        <div className="flex items-center gap-3">
          {pathname !== 'write' && (
            <Button asChild variant="ghost" size="icon" title="글 쓰기">
              <Link href="/write">
                <Pencil className="w-4 h-4" />
              </Link>
            </Button>
          )}
          {/* 글쓰기 버튼 */}

          {/* 알림 버튼 (아이콘형) */}
          <NotificationMenu />

          {/* 프로필 버튼 (아이콘형) */}
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
