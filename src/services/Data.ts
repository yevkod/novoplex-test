import { casinoStore } from '@/store';
import axios from 'axios';

const Data = () => {
    const { setState } = casinoStore;

    const getData = async () => {
        try {
            const response = await axios.get('/api/casinos');
            response.status === 200
                ? setState({ casinoList: response.data })
                : setState({ error: true, errorMessage: 'Error while loading data...' });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : typeof error === 'string' ? error : 'An unknown error occurred.';
            setState({ error: true, errorMessage });
        }
    };

    return {
        getData,
    };
};

export const dataRequest = Data();
