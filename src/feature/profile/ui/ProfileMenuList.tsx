import { BookText, Gavel, LogOut } from 'lucide-react';
import Link from 'next/link';

export const ProfileMenuList = () => (
  <ul className="py-1 text-sm">
    <Link href="/myPost">
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
);
