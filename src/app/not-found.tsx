'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center  px-6 py-12 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        페이지를 찾을 수 없습니다
      </h2>
      <p className="text-gray-500 mb-6">존재하지 않는 주소입니다!</p>
      <Link
        href="/"
        className="inline-block bg-black text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}
