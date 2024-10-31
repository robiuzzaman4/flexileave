import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme/theme-toggle";

const Navbar = () => {
  return (
    <nav className="bg-background fixed top-0 w-full h-14 flex items-center border-b">
      <div className="w-full h-full max-w-screen-lg m-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium tracking-tighter">
          Flexileave
        </Link>

        <div className="flex items-center gap-3">
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
