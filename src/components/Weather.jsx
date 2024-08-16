import React, { useEffect, useState } from 'react'
import Search from './Search';
import useFetch from './FetchApi/useFetch';

const Weather = () => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const [search, setSearch] = useState("Toronto");
    const { data, loading, error } = useFetch(search, apiKey);

    function handleSearch(userInput) {
        console.log(userInput)
        setSearch(userInput)
    }

    function getCurrentDat() {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    return (
        <div>
            <Search handleSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && (
                <div>
                    <div className='city-name'>
                        <h2 >{data.name}</h2>
                    </div>
                    <div className='date'>
                        <span>{getCurrentDat()}</span>

                    </div>
                    <div className="temp">{data?.main?.temp}</div>

                    <div className='description'>
                        <p>{data.weather && data.weather ? data.weather[0].description : ""}</p>
                    </div>
                    <div className='weather-info'>
                        <div className='wind-container'>
                            <p className='wind'>{data?.wind?.speed}</p>
                            <p>Wind Speed</p>
                        </div>
                        <div>
                            <p className='humidity-container'>{data?.wind?.speed}</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default Weather
