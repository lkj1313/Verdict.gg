'use client';
import { useEffect, useRef, useState } from 'react';
import { User, LogOut, BookText, Gavel, UserCircle } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/common';
import ProfileModal from '@/feature/profile/ui/Modal';
import Link from 'next/link';

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false); // 모달 열림 여부
  const wrapperRef = useRef<HTMLDivElement>(null); // 버튼+메뉴 전체 감지

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative" ref={wrapperRef}>
        <Button
          variant="ghost"
          title="프로필"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Profile menu"
          size="icon"
        >
          <User className="w-5 h-5 text-gray-600" />
        </Button>

        {open && (
          <div className="absolute right-0 mt-2 w-56 rounded-lg border border-primary bg-white shadow-lg z-50">
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
              <li
                onClick={() => {
                  setShowProfileModal(true);
                  setOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <UserCircle className="w-4 h-4" />
                프로필
              </li>
              <Link href="/mypost">
                <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <BookText className="w-4 h-4" />
                  내가 쓴 글
                </li>
              </Link>
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
      <ProfileModal
        open={showProfileModal}
        onClose={() => setShowProfileModal(false)}
      />
    </>
  );
};

export default ProfileMenu;
