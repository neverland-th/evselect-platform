import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  return new NextResponse('Not Found', { status: 404 });
}

export const config = {
  matcher: [
    '/products/:path*',
    '/vehicles/:path*',
    '/categories/:path*',
    '/fitment/:path*',
    '/dealers/:path*',
    '/export/:path*',
    '/competitors/:path*',
    '/api/export/:path*'
  ],
};
