"use client";
import { useState } from "react";
import { User, LogOut, BookText, Gavel, UserCircle } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/common";

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Profile menu"
        size="icon"
      >
        <User className="w-5 h-5 text-gray-600" />
      </Button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-lg border border-blue-500 bg-white shadow-lg z-50">
          {/* 프로필 정보 */}
          <div className="flex items-center gap-3 p-4 border-b">
            <Image
              src="/path/to/profileImage.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-sm">
              <p className="font-semibold">ㅇㅇㅇㅇㅇ</p>
              <p className="text-gray-500 text-xs">smm45108@gmail.com</p>
            </div>
          </div>

          {/* 메뉴 리스트 */}
          <ul className="py-1 text-sm">
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <UserCircle className="w-4 h-4" />
              마이페이지
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <BookText className="w-4 h-4" />
              내가 쓴 글
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <Gavel className="w-4 h-4" />
              내가 내린 판결
            </li>
            <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-500 cursor-pointer">
              <LogOut className="w-4 h-4" />
              로그아웃
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
