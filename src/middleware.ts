import { NextResponse } from "next/server";

export function middleware(req: any) {
  const cookie = req.cookies.get("access_token")?.value;

  // Cek apakah permintaan berasal dari jalur yang tidak perlu dijalankan oleh middleware
  const excludedPaths = [/^\/_next/, /^\/favicon.ico$/, /^\/__ENV.js$/];
  const pathname = req.nextUrl.pathname;
  if (excludedPaths.some((regexp) => regexp.test(pathname))) {
    return NextResponse.next();
  }

  // Jika cookie tidak ada, arahkan pengguna ke halaman login
  if (cookie === undefined) {
    // Cek apakah pengguna sudah berada di halaman login
    if (pathname !== "/login") {
      const url = req.nextUrl.clone();
      url.pathname = "/login";
      return NextResponse.redirect(url, req.url);
    }
    // Jika sudah, lanjutkan permintaan tanpa mengarahkan ulang
    else {
      return NextResponse.next();
    }
  }
  // Jika cookie ada, arahkan pengguna ke halaman admin
  else {
    // Cek apakah pengguna sudah berada di halaman admin
    if (pathname !== "/admin") {
      const url = req.nextUrl.clone();
      url.pathname = "/admin";
      return NextResponse.redirect(url, req.url);
    }
    // Jika sudah, lanjutkan permintaan tanpa mengarahkan ulang
    else {
      return NextResponse.next();
    }
  }
}

export const config = {
  matcher: ["/:path*"],
};
