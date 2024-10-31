"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { login } from "@/actions/login";
import { useTransition } from "react";
import { Loader } from "lucide-react";

const SignInSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email address.",
  }),
  password: z.string().min(6, {
    message: "Username must be at least 6 characters.",
  }),
});

const LoginForm = () => {
  const [pending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: z.infer<typeof SignInSchema>) {
    startTransition(() => {
      login(data);
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-sm mx-auto space-y-3 bg-background p-6 rounded-xl border shadow-lg"
      >
        <h3 className="text-xl font-medium tracking-tighter">
          Login into <span className="text-primary">Flexileave</span>{" "}
        </h3>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@mail.com" {...field} type="email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="******" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={pending}>
          {pending && <Loader className="text-sm animate-spin" />}
          Login
        </Button>
        <p className="text-muted-foreground text-sm">
          Don&apos;t have any account?{" "}
          <Link href="/register" className="text-primary">
            Register
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default LoginForm;
