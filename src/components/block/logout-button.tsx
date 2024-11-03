"use client";

import React, { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const [pending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      await signOut();
    });
  };

  return (
    <>
      <Button
        type="submit"
        variant="destructive"
        disabled={pending}
        onClick={handleLogout}
        className="w-fit"
      >
        {pending && <Loader className="text-sm animate-spin" />}
        Logout
      </Button>
    </>
  );
};

export default LogoutButton;
