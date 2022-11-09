import { useState } from "react";

const useGetData = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    const getResource = async (url, headers = {'Content-Type' : 'application/json'}, method = 'GET', body = null ) => {
        // setLoading(true)

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
    return {getResource, error, loading};
}

export default useGetData;