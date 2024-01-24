import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from '../reducers/favouritesReducer'

const store = configureStore({
    reducer: favouritesReducer 
});

export default store;