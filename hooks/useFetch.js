import { useState } from 'react';

export default function useFetch() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const start = async (endpoint, method, body, token, query) => {
        setLoading(true);
        setData(null);
        setError(null);
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (body) options.body = JSON.stringify(body);
        if (token) options.headers.Authorization = `Bearer ${token}`;

        try {
            let mEndpoint = endpoint;
            if (query) mEndpoint = `${endpoint}?${query}`;
            const response = await fetch(mEndpoint, options);
            if (response.status >= 400) throw 'Error';

            let data = null;
            try {
                const jsonres = await response.json();
                data = jsonres;
            } catch (e) {
                console.log('Invalid JSON');
                data = response;
            }
            setData(data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        data,
        error,
        start,
    };
}
