'use client'

import { Casino, CasinoStore } from "@/types";
import { create, useStore } from "zustand";

export const casinoStore = create<CasinoStore>((set) => ({
    casinoList: null,
    setCasinoList: (casinoList: Casino[]) => set({ casinoList}),
    error: false,
    setError: (error) => set({ error})
}))

export const useCasinoStore = () => useStore(casinoStore);