import { Button } from '@/components/common';
import { Bell } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export const NotificationButton = ({ setOpen }: Props) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      title="알림"
      className="relative"
      onClick={() => setOpen((prev) => !prev)}
      aria-label="Notification menu"
    >
      <Bell className="w-5 h-5 text-gray-600" />
      {/* <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" /> 알림 있을 때 표시 */}
    </Button>
  );
};
