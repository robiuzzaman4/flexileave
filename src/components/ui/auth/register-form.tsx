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
import { RegisterSchema } from "@/schema";
import { useTransition } from "react";
import { register } from "@/actions/register";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [pending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    // call server action and show response message
    startTransition(() => {
      register(values).then((data) => {
        if (data?.success) {
          toast.success(data?.message);
          router.push("/login");
        } else {
          toast.error(data?.message);
        }
      });
    });

    // reset form
    form.reset({
      name: "",
      email: "",
      password: "",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-sm mx-auto space-y-3 bg-card text-card-foreground p-6 rounded-xl border shadow-lg"
      >
       <span className="grid gap-1 text-center">
          <h3 className="text-2xl font-medium tracking-tighter">
            Register into <span className="text-primary">Flexileave</span>
          </h3>
          <p className="text-sm text-muted-foreground tracking-tighter">
            Create new Account.
          </p>
        </span>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Jhon Doe" {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          Register
        </Button>
        <p className="text-muted-foreground text-sm">
          Already have account?{" "}
          <Link href="/login" className="text-primary">
            Login
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default RegisterForm;
