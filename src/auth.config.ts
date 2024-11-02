/* eslint-disable @typescript-eslint/no-require-imports */
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schema";
import { getUserByEmail } from "@/data";
const bcrypt = require("bcryptjs");

export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields?.data;

          // check user exists or not
          const user = await getUserByEmail(email);

          // if user exist but didn't provide password [like login with google] then simply stop exicuting
          if (!user || user?.password) return null;

          // compare password
          const passwordMatched = await bcrypt.compare(password, user?.password);

          // if password matched then return user
          if (passwordMatched) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
