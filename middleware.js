import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request) {
  const { nextUrl, cookies, geo } = request;
  const { pathname } = nextUrl;

  if (
    PUBLIC_FILE.test(pathname) ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next")
  ) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/en") || pathname.startsWith("/zh")) {
    return NextResponse.next();
  }

  if (pathname !== "/") {
    return NextResponse.next();
  }

  const cookieLang = cookies.get?.("lang")?.value;
  let targetLang =
    cookieLang === "en" || cookieLang === "zh" ? cookieLang : undefined;

  if (!targetLang) {
    const country =
      geo?.country || request.headers.get("x-vercel-ip-country") || "";
    targetLang = country === "CN" ? "zh" : "en";
  }

  const url = nextUrl.clone();
  url.pathname = `/${targetLang}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

