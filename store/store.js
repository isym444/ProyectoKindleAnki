import { combineReducers, createStore } from "redux";
import user from "./reducer/userreducer";
import count from './reducer/count' // count here a function rather than value
const combinereducers=combineReducers({user,count})

const store=createStore(combinereducers)
export default store
