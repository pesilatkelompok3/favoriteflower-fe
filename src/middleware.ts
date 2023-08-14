import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
// import { isAuthenticated } from "@lib/auth";

export const middleware = (request: NextRequest) => {
  return NextResponse.redirect(new URL("/admin", request.url));
};

export const config = {
  matcher: "/admin",
};
