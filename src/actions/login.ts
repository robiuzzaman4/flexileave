/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import connectDb from "@/lib/db";
import { LoginSchema } from "@/schema";
import { z } from "zod";
import User from "@/models/user";

export async function login(payload: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(payload);

  if (!validatedFields) {
    return {
      success: false,
      message: "Invalid fields",
    };
  }

  try {
    // connect db
    await connectDb();

    // check if user already exists
    const existingUser = await User.findOne({
      email: validatedFields.data?.email,
    });

    // if user exists, return error message
    if (!existingUser) {
      return {
        success: false,
        message: "User not found",
      };
    }

    return {
      success: true,
      message: "Login successful",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to login",
    };
  }
}
