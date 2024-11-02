/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { LoginSchema } from "@/schema";
import { z } from "zod";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export async function login(payload: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(payload);

  if (!validatedFields?.success) {
    return {
      success: false,
      message: "Invalid fields",
    };
  }

  const { email, password } = validatedFields?.data;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    if (result) {
      return {
        success: true,
        message: "Login successful",
      };
    } else {
      return {
        success: false,
        message: "Something went wrong",
      };
    }
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error?.type) {
        case "CredentialsSignin":
          return {
            success: false,
            message: "Invalid credentials",
          };
        default:
          return {
            success: false,
            message: error?.message ?? "Something went wrong",
          };
      }
    }

    throw error;
  }
}
