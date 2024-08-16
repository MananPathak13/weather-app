import React, { useEffect, useState } from 'react'

const useFetch = (param, apiKey) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchWeatherData() {
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}`
            );

            const data = await response.json();
            console.log(data)
            if (data) {
                setData(data);
                setLoading(false);
            }
        } catch (e) {
            setLoading(false);
            console.log(e);
            setError(e)
        }
    }
    useEffect(() => {
        fetchWeatherData();
    }, [param]);
    return { data, loading, error }
}

export default useFetch
