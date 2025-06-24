import Image from 'next/image';
interface Props {
  onProfileClick: () => void;
}
export const ProfileInfo = ({ onProfileClick }: Props) => (
  <div className="flex items-center gap-3 p-4 border-b">
    <Image
      src="/path/to/profileImage.png"
      alt="Profile"
      width={40}
      height={40}
      className="rounded-full"
      onClick={onProfileClick}
    />
    <div className="text-sm">
      <p className="font-semibold">ㅇㅇㅇㅇㅇ</p>
      <p className="text-gray-500 text-xs">smm45108@gmail.com</p>
    </div>
  </div>
);
