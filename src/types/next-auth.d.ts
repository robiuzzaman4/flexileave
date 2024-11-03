import { type DefaultSession } from "next-auth";

export type ExtendUser = DefaultSession["user"] & {
  role: "USER" | "ADMIN";
};

declare module "next-auth" {
  interface Session {
    user: ExtendUser;
  }
}
