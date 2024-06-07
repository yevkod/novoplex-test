'use client'

import { Casino, CasinoStore } from "@/types";
import { create, useStore } from "zustand";

export const casinoStore = create<CasinoStore>((set) => ({
    casinoList: { data: null },
    setCasinoList: (casinoList: Casino[] | null) => set({ casinoList: { data: casinoList } }),
    error: false,
    setError: (error) => set({ error}),
    searchResults: [],
    setSearchResults: (results) => set({ searchResults: results }),
    searchQuery: '',
    setSearchQuery: (query) => set({ searchQuery: query }),
}))

export const useCasinoStore = () => useStore(casinoStore);