import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email({
    message: "Enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
});
