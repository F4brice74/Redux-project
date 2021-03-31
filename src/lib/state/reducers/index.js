// import des actions

import {actions} from '../actions/index';
const{FETCH_PENDING, FETCH_SUCCESS, FETCH_ERROR, FETCH_TOP_STORIES, FETCH_MOST_POPULAR} = actions;


// déclaration du state initial

const initialState = {
    isFetching: false,
    haserror: null,
    top_stories: [],
    most_popular: [],
};

//création du reducer

export function reducer(state = initialState, action){
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
        case FETCH_TOP_STORIES:
            return {
                ...state,
                top_stories : action.payload.top_stories,
            }
        case FETCH_MOST_POPULAR:
            return {
                ...state, 
                most_popular: action.payload.most_popular
            }
        default : 
        return state;
    }
}
