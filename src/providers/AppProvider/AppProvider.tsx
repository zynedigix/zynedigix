import type { ReactNode } from "react";

import { ThemeProvider } from "@/providers/ThemeProvider";
import { AppProvider } from "@/providers/AppProvider";
import { LenisProvider } from "@/lib/lenis";

interface Props {
  children: ReactNode;
}

export default function AppProviders({
  children,
}: Props) {
  return (
    <ThemeProvider>
      <AppProvider>
        <LenisProvider>
          {children}
        </LenisProvider>
      </AppProvider>
    </ThemeProvider>
  );
}