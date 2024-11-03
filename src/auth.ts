import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { getUserById } from "@/data";

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    async jwt({ token }) {
      if (!token.sub) return token;

      // add 'role' to the token
      const existingUser = await getUserById(token.sub as string);
      if (!existingUser) return token;

      if ("role" in existingUser) {
        token.role = existingUser?.role;
      }

      return token;
    },
    async session({ session, token }) {
      // add user id to the session
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      // add user role to the session
      if (token.role && session.user) {
        session.user.role = token.role as "USER" | "ADMIN";
      }

      return session;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
  secret: process.env.AUTH_SECRET,
});
