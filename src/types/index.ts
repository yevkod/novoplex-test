export interface Casino {
    id: number;
    name: string;
    description: string;
    photo_url: string;
}

export interface CasinoStore {
    casinoList: Casino[] | null;
    setCasinoList: (casinoList: Casino[]) => void;
    error: boolean;
    setError: (value: boolean) => void;
}

export interface InputProps {
    onSearch: (search: string) => void;
}