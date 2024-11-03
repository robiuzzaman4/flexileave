"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === "light" ? (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme("dark")}
          className="bg-secondary"
        >
          <MoonIcon />
          <span className="sr-only">Toggle theme</span>
        </Button>
      ) : (
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme("light")}
          className="bg-secondary"
        >
          <SunIcon />
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}
    </>
  );
};

export default ThemeToggle;
