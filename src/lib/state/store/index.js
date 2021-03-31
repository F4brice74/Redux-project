import {createStore, compose, applyMiddleware} from "redux"; 
import {reducer} from '../reducers/index'

export const store = createStore(reducer)