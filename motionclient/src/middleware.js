import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.cookies.has("access_token")) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/home/:path*",
};
