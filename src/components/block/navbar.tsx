import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme/theme-toggle";
import { auth } from "@/auth";
import { ShieldHalf } from "lucide-react";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="bg-secondary fixed top-0 w-full h-14 flex items-center border-b">
      <div className="w-full h-full max-w-screen-md mx-auto px-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-medium tracking-tighter flex items-center gap-1"
        >
          <ShieldHalf size={20} className="text-primary" /> <p>Auth</p>
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

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
