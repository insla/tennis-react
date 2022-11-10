import { useState } from "react";

const useGetData = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)

    const getResource = async (url, headers = {'Content-Type' : 'application/json'}, method = 'GET', body = null ) => {
        setLoading(true)

        try {
            const response = await fetch(url, {method, body, headers})

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            
            const data = await response.json();
            setLoading(false)
            
            return data 

        } catch(e) {
            setError(e.message)
            setLoading(false)
            throw (e)
        }
    }

    const clearError = () => {
        setError(null)
    }

    return {getResource, clearError, error, loading};
}

export default useGetData;