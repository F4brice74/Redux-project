import { topStoriesReducer} from "./top_stories"
import { mostPopularReducer} from "./most_popular"
import {requestReducer} from "./request" 
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    topStoriesReducer, 
    mostPopularReducer,
    requestReducer,
  })
  
  export default rootReducer