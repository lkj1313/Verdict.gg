import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // OAuth 콜백 처리 - /signup 경로에서 쿼리 파라미터가 있는 경우
  if (
    pathname === '/signup' &&
    (searchParams.has('email') || searchParams.has('id'))
  ) {
    // 이미 올바른 경로이므로 그대로 진행
    return NextResponse.next();
  }

  // /signup/[id] 경로 처리
  if (
    pathname.match(/^\/signup\/[^\/]+$/) &&
    (searchParams.has('email') || searchParams.has('id'))
  ) {
    // 동적 라우트로 처리되므로 그대로 진행
    return NextResponse.next();
  }

  // 기타 OAuth 관련 리다이렉트 처리
  if (pathname.startsWith('/login') && searchParams.has('error')) {
    // OAuth 에러 처리
    const url = request.nextUrl.clone();
    url.pathname = '/login';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/signup/:path*', '/login/:path*'],
};
