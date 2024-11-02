/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import connectDb from "@/lib/db";
import { RegisterSchema } from "@/schema";
import { z } from "zod";
import User from "@/models/user";

export async function register(payload: z.infer<typeof RegisterSchema>) {
  // validate fields
  const validatedFields = RegisterSchema.safeParse(payload);

  // check if fields are valid
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
    if (existingUser) {
      return {
        success: false,
        message: "Email already in use",
      };
    }

    // create user and return success response
    const result = await User.create(validatedFields?.data);

    if (result) {
      return {
        success: true,
        message: "Registration successful",
      };
    } else {
      return {
        success: false,
        message: "Failed to register",
      };
    }
  } catch (error: any) {
    return {
      success: false,
      message: error.message ?? "Failed to register",
    };
  }
}
