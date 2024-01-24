export const SEARCH_CITY = 'SEARCH_CITY';
export const SET_DAILYFORECAST = 'SET_DAILYFORECAST';
export const SET_WEEKFORECAST = 'SET_WEEKFORECAST';


export  const setSearchCity = (query) => {
    return {
        type: SEARCH_CITY,
        payload: query
    }
}

export  const setDailyForecast = (dailyWeatherData) => {
    return {
        type: SET_DAILYFORECAST, 
        payload: dailyWeatherData
    }
}

export  const setWeekForecast = (weekWeatherData) => {
    return {
        type: SET_WEEKFORECAST, 
        payload: weekWeatherData 
    }
}
