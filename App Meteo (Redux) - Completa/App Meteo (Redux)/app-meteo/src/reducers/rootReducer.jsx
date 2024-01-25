import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import WeekForecastReducer from './WeekForecastReducer';
import DailyForecastReducer from './DailyForecastReducer';

const rootReducer = combineReducers({
    search: searchReducer,
    DailyForecast: DailyForecastReducer,
    WeekForecast: WeekForecastReducer
})

export default rootReducer;
