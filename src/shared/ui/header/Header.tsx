// src/shared/ui/header/index.tsx

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { Button, Input } from "@/components/common";
import { Pencil, Bell, User } from "lucide-react";

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
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5 text-gray-600" />
            {/* <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />{" "}
            알림있을떄쓰기기 */}
          </Button>

          {/* 프로필 버튼 (아이콘형) */}
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5 text-gray-600" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
