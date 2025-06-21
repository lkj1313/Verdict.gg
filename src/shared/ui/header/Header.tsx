// src/shared/ui/header/index.tsx

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Button, Input } from "@/components/common";
import { Pencil, Bell } from "lucide-react";
import ProfileMenu from "@/feature/user/ui/ProfileMenu";
import NotificationMenu from "@/feature/user/ui/NotificationMenu";

const Header = () => {
  return (
    <header className="w-full border-b rounded-lg bg-white py-4">
      <div className="w-full flex justify-between  items-center p-5">
        <Link href="/" className="inline-block">
          <Image
            src={logo}
            alt="Verdict.gg Logo"
            width={120}
            height={32}
            priority
          />
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
