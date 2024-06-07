'use client'

import { Casino, CasinoStore } from "@/types";
import { create, useStore } from "zustand";

export const casinoStore = create<CasinoStore>((set) => ({
    casinoList: { data: null },
    setCasinoList: (casinoList: Casino[] | null) => set({ casinoList: { data: casinoList } }),
    error: false,
    setError: (error) => set({ error})
}))

export const useCasinoStore = () => useStore(casinoStore);