import { useState } from "react";

const useGetData = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const getResource = async (url, headers = {'Content-Type' : 'application/json'}, method = 'GET', body = null ) => {
        setLoading(true)

        try {
            const res = await fetch(url, {method, body, headers})

            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }
            
            const data = await res.json();
            setLoading(false)
            
            return data 

        } catch(e) {
            setError(e.message)
            setLoading(false)
            throw (e)
        }
    }
    return {getResource, error, loading};
}

export default useGetData;