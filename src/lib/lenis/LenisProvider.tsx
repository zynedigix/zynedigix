import { useEffect, type ReactNode } from "react";
import { lenis } from "./lenis";

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({
  children,
}: LenisProviderProps) {
  useEffect(() => {
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}