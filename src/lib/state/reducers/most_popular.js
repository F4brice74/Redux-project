// import des actions
import { actions } from '../actions/index';
const { MOST_POPULAR } = actions;


// déclaration du state initial

const initialState = {
    most_popular: [],
};

//création du reducer
export function mostPopularReducer(state = initialState, action) {
    switch (action.type) {
        case MOST_POPULAR:
            return {
                most_popular: action.payload.most_popular,
            }
        default:
            return state;
    }
}
