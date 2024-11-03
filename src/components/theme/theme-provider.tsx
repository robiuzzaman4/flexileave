// "use client";

// import * as React from "react";
// const NextThemesProvider = dynamic(
//   () => import("next-themes").then((e) => e.ThemeProvider),
//   {
//     ssr: false,
//   }
// );

// import { type ThemeProviderProps } from "next-themes/dist/types";
// import dynamic from "next/dynamic";

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
//   return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
// }

"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
