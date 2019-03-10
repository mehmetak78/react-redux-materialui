
import {combineReducers} from "redux";

import userReducer from "./userReducer";
import layoutReducer from "./layoutReducer";

const rootReducer = combineReducers( {
    user:userReducer,
    layout:layoutReducer
});

export default rootReducer;

