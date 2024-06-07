export interface Casino {
    id: number;
    name: string;
    description: string;
    photo: string;
}

export interface CasinoList {
    data: Casino[] | null;
}

interface CasinoState {
    casinoList: CasinoList;
    error: boolean;
    errorMessage?: string;
    searchResults: Casino[];
    searchQuery: string;
}

interface CasinoActions {
    setCasinoList: (casinoList: Casino[] | null) => void;
    setError: (value: boolean) => void;
    setSearchResults: (results: Casino[]) => void;
    setSearchQuery: (query: string) => void;
}

export interface CasinoStore extends CasinoState, CasinoActions { }

export interface InputProps<T> {
    value: T;
    onChange: (value: T) => void;
}
