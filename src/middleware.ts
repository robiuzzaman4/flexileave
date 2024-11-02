import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl?.pathname?.startsWith(apiAuthPrefix);
  const isAuthRoute = authRoutes.includes(nextUrl?.pathname);
  const isPublicRoute = publicRoutes.includes(nextUrl?.pathname);

  // if "/api/auth/*" then allow user to access ["IMPORTANT" order - 1]
  if (isApiAuthRoute) {
    return;
  }

  // if "/login" or "/register" then redirect to login page if user is logged in ["IMPORTANT" order - 2]
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  // if not logged in and not a public route then redirect to login page ["IMPORTANT" order - 3]
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/login", nextUrl));
  }
});

// route mathcher
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
