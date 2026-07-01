import { create } from "zustand";

import type { Movie } from "@/types/movie";

interface MovieStore {
  purchasedMovies: Movie[];
  checkoutMovie: Movie | null;
  paymentStatus: "idle" | "processing" | "success";
  purchaseMovie: (movie: Movie) => void;
  openCheckout: (movie: Movie) => void;
  closeCheckout: () => void;
  completePayment: () => Promise<void>;
  isPurchased: (movieId: string) => boolean;
  clearPurchases: () => void;
}

export const useMovieStore = create<MovieStore>((set, get) => ({
  purchasedMovies: [],
  checkoutMovie: null,
  paymentStatus: "idle",

  purchaseMovie: (movie) => {
    const alreadyPurchased = get().purchasedMovies.some((item) => item.id === movie.id);

    if (alreadyPurchased) {
      return;
    }

    set((state) => ({
      purchasedMovies: [...state.purchasedMovies, movie],
    }));
  },

  openCheckout: (movie) => {
    set({
      checkoutMovie: movie,
      paymentStatus: "idle",
    });
  },

  closeCheckout: () => {
    set({
      checkoutMovie: null,
      paymentStatus: "idle",
    });
  },

  completePayment: async () => {
    const movie = get().checkoutMovie;

    if (!movie) {
      return;
    }

    set({ paymentStatus: "processing" });

    await new Promise<void>((resolve) => {
      window.setTimeout(() => resolve(), 1200);
    });

    set((state) => ({
      purchasedMovies: state.purchasedMovies.some((item) => item.id === movie.id)
        ? state.purchasedMovies
        : [...state.purchasedMovies, movie],
      paymentStatus: "success",
    }));
  },

  isPurchased: (movieId) => get().purchasedMovies.some((movie) => movie.id === movieId),

  clearPurchases: () => set({ purchasedMovies: [] }),
}));
