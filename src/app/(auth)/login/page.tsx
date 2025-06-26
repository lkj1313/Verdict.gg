// app/(auth)/login/page.tsx
'use client';

import { FcGoogle } from 'react-icons/fc';
import { SiNaver } from 'react-icons/si';
import Link from 'next/link';
import { Button } from '@/components/common';

export default function LoginPage() {
  const handleLogin = (provider: 'google' | 'naver') => {
    window.location.href = `https://verlol.site/oauth2/authorization/${provider}`;
  };

  return (
    <div className="min-h-dvh bg-[#f5f5f5] flex items-center justify-center px-4">
      <div className="flex flex-col items-center w-full max-w-xs space-y-8">
        {/* 로고 */}
        <section>
          <Link href="/">
            <h1 className="text-4xl font-bold tracking-tight text-primary">
              Verdict.gg
            </h1>
          </Link>
        </section>

        {/* 로그인 버튼들 */}
        <section className="flex flex-col w-full gap-3">
          <Button
            onClick={() => handleLogin('google')}
            className="flex items-center justify-center gap-3 bg-black text-white py-2 rounded-md hover:opacity-90 transition"
          >
            <FcGoogle size={30} />
            <span className="text-sm">구글로 로그인</span>
          </Button>

          <Button
            onClick={() => handleLogin('naver')}
            className="flex items-center justify-center gap-3 bg-black text-white py-2 rounded-md hover:opacity-90 transition"
          >
            <SiNaver size={20} />
            <span className="text-sm">네이버로 로그인</span>
          </Button>
        </section>

        {/* 하단 링크 */}
        <section className="text-xs text-gray-500 space-x-4 mt-4">
          <Link href="/terms" className="hover:underline">
            이용약관
          </Link>
          <Link href="/privacy" className="hover:underline">
            개인정보처리방침
          </Link>
        </section>
      </div>
    </div>
  );
}
