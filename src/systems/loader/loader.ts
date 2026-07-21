import { create } from "zustand";

interface LoaderState {
  isLoading: boolean;
  progress: number;
  setProgress: (progress: number) => void;
  finishLoading: () => void;
}

export const useLoaderStore = create<LoaderState>((set) => ({
  isLoading: true,
  progress: 0,

  setProgress: (progress) =>
    set({
      progress,
    }),

  finishLoading: () =>
    set({
      isLoading: false,
      progress: 100,
    }),
}));