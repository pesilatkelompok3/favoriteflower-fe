import { NextResponse, NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {
  // return NextResponse.redirect(new URL("/admin", request.url));
};

export const config = {
  matcher: "/admin",
};
