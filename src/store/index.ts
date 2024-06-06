import { Casino, CasinoStore } from "@/types";
import { create, useStore } from "zustand";

export const casinoStore = create<CasinoStore>((set) => ({
    casinoList: null,
    setCasinoList: (casinoList: Casino[]) => set({ casinoList})
}))

export const useCasinoStore = () => useStore(casinoStore);