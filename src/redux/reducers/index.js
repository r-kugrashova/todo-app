import { combineReducers } from "redux";
import todos from "./todos/reducer";
import filters from './filter/reducers';


const rootReducer = combineReducers({
    todos,
    filters,
})

export default rootReducer
