export const ADD_JOB = 'ADD_JOB';
export const REMOVE_JOB = 'REMOVE_JOB';
export const GET_COMPANY = 'GET_COMPANY';


export const addToFavourites = (title) => {
    return {
        type: ADD_JOB,
        payload: title
    }
}

export const removeFromFavourites = (title) => {
    return {
        type: REMOVE_JOB,
        payload: title
    }
}


export  const getCompanyResult = (companyResult) => {
    return {
        type: GET_COMPANY, 
        payload: companyResult 
    }
}



