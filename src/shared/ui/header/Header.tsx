// src/shared/ui/header/index.tsx

import Link from 'next/link';

import { Button, Input } from '@/components/common';
import { Pencil } from 'lucide-react';
import ProfileMenu from '@/feature/user/ui/ProfileMenu';
import NotificationMenu from '@/feature/user/ui/NotificationMenu';

const Header = () => {
  return (
    <header className="w-full border-2 shadow-sm rounded-lg py-4">
      <div className="w-full flex justify-between  items-center p-5">
        <Link href="/" className="inline-block">
          <h1 className="text-4xl font-bold tracking-tight text-primary">
            Verdict.gg
          </h1>
        </Link>
        {/* 가운데 인풋 */}
        <div className="flex-1 px-8">
          <Input type="text" placeholder="검색해보세요..." />
        </div>
        <div className="flex items-center gap-3">
          {/* 글쓰기 버튼 */}
          <Button variant="default">
            <Pencil className="w-4 h-4" />
            글쓰기
          </Button>

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
