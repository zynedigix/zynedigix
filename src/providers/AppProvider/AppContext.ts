import { createContext } from "react";
import type { AppContextValue } from "./app.types";

export const AppContext = createContext<AppContextValue | undefined>(
  undefined
);