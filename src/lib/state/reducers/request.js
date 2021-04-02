// import des actions

import {actions} from '../actions/index';
const{FETCH_PENDING, FETCH_SUCCESS, FETCH_ERROR} = actions;


// déclaration du state initial

const initialState = {
    isFetching: false,
    haserror: null,
};

//création du reducer

export function requestReducer(state = initialState, action){
    switch(action.type) {
        case FETCH_PENDING:
            return {
                ...state,
                isFetching:true,
            }
        case FETCH_SUCCESS: 
            return {
                ...state,
                isFetching: false,
            }
        case FETCH_ERROR: 
        return {
            ...state, 
            isFetching: false,
            haserror: action.payload.error,
        }
        default : 
        return state;
    }
}


