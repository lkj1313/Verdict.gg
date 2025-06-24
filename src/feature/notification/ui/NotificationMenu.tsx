'use client';

import { useClickOutside } from '@/shared/lib/hooks';
import { useNotificationMenu } from '../hooks';
import { NotificationButton } from './NotificationButton';
import { NotificationDropdown } from './NotificationDropdown';

export const NotificationMenu = () => {
  const { open, setOpen, menuRef } = useNotificationMenu();
  // 바깥 클릭 시 닫기
  useClickOutside(menuRef, () => setOpen(false));

  return (
    <div className="relative" ref={menuRef}>
      <NotificationButton setOpen={setOpen} />

      {open && <NotificationDropdown />}
    </div>
  );
};
