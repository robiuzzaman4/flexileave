import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import ThemeBtn from "@/components/theme/theme-button";
import { auth } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="bg-secondary fixed top-0 w-full h-14 flex items-center border-b">
      <div className="w-full h-full max-w-screen-md mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium tracking-tighter">
          Flexileave
        </Link>

        <div className="flex items-center gap-3">
          {session ? (
            <Button asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          )}

          <ThemeBtn />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
