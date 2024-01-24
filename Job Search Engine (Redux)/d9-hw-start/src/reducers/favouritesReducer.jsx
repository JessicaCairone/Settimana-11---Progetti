import { ADD_JOB, REMOVE_JOB } from '../actions/actions';

const initialState = {
    list: []
}

const favouritesReducer = (state = initialState, action) => {
switch (action.type) {
    case ADD_JOB:
        return {
            ...state,
            list: [...state.list, action.payload]
        }

        case REMOVE_JOB:
            return {
                ...state,
                list: state.list.filter((fav) => fav !== action.payload)
            }
        default:
            return state
}
}

export default favouritesReducer;