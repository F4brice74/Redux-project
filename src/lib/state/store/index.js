import {createStore, compose, applyMiddleware} from "redux"; 
import {reducer} from '../reducers/index';
import thunk from "redux-thunk"; 

//https://github.com/zalmoxisus/redux-devtools-extension#1-with-redux
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
