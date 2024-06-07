import { casinoStore } from '@/store';
import axios from 'axios';

const Data = () => {
    const { setState } = casinoStore;

    const getData = async () => {
        try {
            const response = await axios.get('/api/casinos');
            if (response.status === 200) {
                setState({ casinoList: response.data });
            } else {
                setState({ error: true });
            }
        } catch (error) {
            setState({ error: true });
        } finally {
            setState({ error: true });
        }
    };

    return {
        getData,
    };
};

export const dataRequest = Data();
