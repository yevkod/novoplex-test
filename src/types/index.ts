export interface Casino {
    id: number;
    name: string;
    description: string;
    photo: string;
}

export interface CasinoList {
    data: Casino[] | null;
}

export interface CasinoStore {
    casinoList: CasinoList;
    setCasinoList: (casinoList: Casino[] | null) => void;
    error: boolean;
    setError: (value: boolean) => void;
}

export interface InputProps {
    onSearch: (search: string) => void;
}