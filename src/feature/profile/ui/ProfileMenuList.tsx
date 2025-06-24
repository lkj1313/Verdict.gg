import { BookText, Gavel, LogOut, UserCircle } from 'lucide-react';
import Link from 'next/link';

interface Props {
  onProfileClick: () => void;
}

export const ProfileMenuList = ({ onProfileClick }: Props) => (
  <ul className="py-1 text-sm">
    <li
      onClick={onProfileClick}
      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
    >
      <UserCircle className="w-4 h-4" />
      프로필
    </li>
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
