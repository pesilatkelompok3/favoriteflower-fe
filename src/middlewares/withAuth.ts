import { getToken } from 'next-auth/jwt';
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from 'next/server';

const onlyAdminPage = ['/admin', '/admin/edit'];
const authPage = ['/login'];

export default function withAuth(middleware: NextMiddleware, requireAuth: string[] = []) {
 return async (req: NextRequest, next: NextFetchEvent) => {
  const pathName = req.nextUrl.pathname;

  const shouldProtectPage = onlyAdminPage.some((protectedPage) => pathName.startsWith(protectedPage));

  if (shouldProtectPage || requireAuth.includes(pathName)) {
   const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

   if (!token && !authPage.includes(pathName)) {
    const url = new URL('/login', req.url);
    url.searchParams.set('callbackUrl', encodeURI(req.url));
    return NextResponse.redirect(url);
   }

   if (token) {
    if (authPage.includes(pathName)) {
     return NextResponse.redirect(new URL('/admin', req.url));
    }

    if (token.role !== 'admin' && onlyAdminPage.includes(pathName)) {
     return NextResponse.redirect(new URL('/login', req.url));
    }
   }
  }
  return middleware(req, next);
 };
}
