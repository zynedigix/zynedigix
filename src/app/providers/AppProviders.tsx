import type { ReactNode } from "react";
import { ThemeProvider } from "@/providers/ThemeProvider";

interface Props {
  children: ReactNode;
}

export default function AppProviders({ children }: Props) {
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