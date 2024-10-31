import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="bg-background fixed top-0 w-full h-14 flex items-center border-b">
      <div className="w-full h-full max-w-screen-lg m-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-medium tracking-tighter">
          Flexi Leave
        </Link>

        <Button asChild>
          <Link href="/signin">Signin</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
