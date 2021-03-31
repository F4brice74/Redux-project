import { Request, Constant } from "../../../service/index"
const {TOP_STORIES, MOST_POPULAR} = Constant


//DEFINE ACTIONS
export const actions = {
    FETCH_PENDING : "FETCH_PENDING",
    FETCH_TOP_STORIES : "FETCH_TOP_STORIES",
    FETCH_MOST_POPULAR : "FETCH_MOST_POPULAR",
    FETCH_SUCCESS : "FETCH_SUCCESS",
    FETCH_ERROR : "FETCH_ERROR"
}

//CREATE ACTIONS
export function fetchPending() {
    return {
        type: actions.FETCH_PENDING
    }
}
export function fetchSuccess() {
    return {
        type: actions.FETCH_SUCCESS,
    }
}
export function fetchError(err) {
    return {
        type: actions.FETCH_ERROR,
        payload: { error: err }
    }
}
export function fetchTopStories(results) {
    return {
        type: actions.FETCH_TOP_STORIES,
        payload: { top_stories: results }
    }
}
export function fetchMostPopular(results) {
    return {
        type: actions.FETCH_MOST_POPULAR,
        payload: { most_popular: results }
    }
}

export function getTopStories() {
    return (dispatch) => {
        //on dispatch notra premiere action
        dispatch(fetchPending());
        // on lance la requete avec notre service
        const request = new Request(TOP_STORIES)
        request
            .get()
            .then((results) => {
                //en cas de réponse on dispatch l'action success
                dispatch(fetchSuccess());
                //puis on dispatche l'action en passant le resultat en param
                dispatch(fetchTopStories(results))
            })
            //en cas d'erreur on dispatch fetc error avec error en param
            .catch((error) => dispatch(fetchError(error)))
    };
}