"use server";

import { LoginSchema } from "@/schema";
import { z } from "zod";

export async function login(payload: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(payload);

  if (!validatedFields) {
    return {
      success: false,
      message: "Invalid login credentials",
    };
  }

  return {
    success: true,
    message: "Login successful",
  };
}
