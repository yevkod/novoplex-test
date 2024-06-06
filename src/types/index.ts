export interface Casino {
    id: number;
    name: string;
    description: string;
    photo_url: string;
}

export interface CasinoStore {
    casinoList: Casino[] | null;
    setCasinoList: (casinoList: Casino[]) => void;
}
