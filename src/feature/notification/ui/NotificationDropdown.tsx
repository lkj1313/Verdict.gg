export const NotificationDropdown = () => {
  const notifications: string[] = []; // 추후 props로 받을 수도 있음

  return (
    <div className="absolute min-h-[300px] right-0 mt-2 w-60 xs:w-80 rounded-lg border border-primary bg-white shadow-lg z-50 overflow-hidden flex flex-col justify-between">
      {/* 제목 */}
      <div className="px-4 py-3 border-b">
        <p className="text-sm font-semibold text-gray-800">🔔 전체</p>
      </div>

      {/* 본문 */}
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

        <div className="px-4 pb-4">
          <p className="text-xs text-gray-400 text-center">
            최대 14일 전까지의 알림을 확인할 수 있어요
          </p>
        </div>
      </div>
    </div>
  );
};
