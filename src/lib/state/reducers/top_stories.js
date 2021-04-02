// import des actions

import { actions } from '../actions/index';
const { FETCH_TOP_STORIES } = actions;


// déclaration du state initial

const initialState = {
    top_stories: [],
};

//création du reducer
export function topStoriesReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TOP_STORIES:
            return {
                top_stories: action.payload.top_stories,
            }
        default:
            return state;
    }
}
