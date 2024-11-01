"use server";

import { RegisterSchema } from "@/schema";
import { z } from "zod";

export async function register(payload: z.infer<typeof RegisterSchema>) {
  const validatedFields = RegisterSchema.safeParse(payload);

  if (!validatedFields) {
    return {
      success: false,
      message: "Invalid fields",
    };
  }

  return {
    success: true,
    message: "Register successful",
  };
}
