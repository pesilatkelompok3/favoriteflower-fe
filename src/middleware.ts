import { NextResponse } from "next/server";

export function middleware(req: any) {
  const cookie = req.cookies.get("access_token")?.value;
  if (cookie === undefined) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url, req.url);
  }
}

export const config = {
  matcher: "/admin",
};
