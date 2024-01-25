import { SET_DAILYFORECAST } from "../actions/weatherActions";

const initialState = {
    dailyWeatherData: [],
};


const DailyForecastReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DAILYFORECAST:
            return {
            ...state,
            dailyWeatherData : action.payload,
            };
            default:
                return state;
    }
};

export default DailyForecastReducer;