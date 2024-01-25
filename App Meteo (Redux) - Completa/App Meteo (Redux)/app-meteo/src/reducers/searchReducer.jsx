import { SEARCH_CITY } from "../actions/weatherActions";

const initialState = {
    searchCity: '',
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_CITY:
            return {
                ...state,
                searchCity: action.payload,
            };
            default: 
            return state;
    }
}

export default searchReducer;