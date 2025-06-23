'use client';
import { useEffect, useRef, useState } from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/common';

const NotificationMenu = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // 메뉴 영역 전체 참조

  // 바깥 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications: string[] = []; // 알림 데이터 배열

  return (
    <div className="relative" ref={menuRef}>
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

      {open && (
        <div className="absolute min-h-[300px] right-0 mt-2 w-60 xs:w-80 rounded-lg border border-primary bg-white shadow-lg z-50 overflow-hidden flex flex-col justify-between">
          {/* 제목 */}
          <div className="px-4 py-3 border-b">
            <p className="text-sm font-semibold text-gray-800">🔔 전체</p>
          </div>

          {/* 알림 + 안내 문구를 묶음 */}
          <div className="flex flex-col justify-between flex-1">
            <div className="px-4 py-5 text-sm text-gray-600 flex-1">
              {notifications.length === 0 ? (
                <div className="space-y-2 text-center text-gray-500 text-sm">
                  <p>새로운 알람이 없습니다!</p>
                </div>
              ) : (
                notifications.map((msg, i) => (
                  <div key={i} className="py-2 border-b last:border-none">
                    {msg}
                  </div>
                ))
              )}
            </div>

            {/* 항상 하단에 붙도록 */}
            <div className="px-4 pb-4">
              <p className="text-xs text-gray-400 text-center">
                최대 14일 전까지의 알림을 확인할 수 있어요
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationMenu;
