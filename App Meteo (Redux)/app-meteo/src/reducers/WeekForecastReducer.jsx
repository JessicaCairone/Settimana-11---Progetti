const initialState = {
    weekWeatherData: null,
};


const WeekForecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_WEEKFORECAST':
            return {
            ...state,
            weekWeatherData : action.payload,
            };
            default:
                return state;
    }
};

export default WeekForecastReducer;