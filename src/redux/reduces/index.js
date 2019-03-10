import {combineReducers} from "react-redux";
import {playerReducer} from "./playes";


//초기 state는 {playerReducer: xxx}
export const rootReducer = combineReducers({playerReducer:playerReducer})