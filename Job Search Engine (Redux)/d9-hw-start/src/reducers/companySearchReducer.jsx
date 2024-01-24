import { GET_COMPANY} from '../actions/actions';

const initialState = {
SEARCH_COMPANY: null
}

const getCompanyReducer = (state = initialState, action) => {
switch (action.type) {
    case GET_COMPANY:
        return {
            ...state,
           GET_COMPANY: action.payload
        }

        default:
            return state
}
}

export default getCompanyReducer;