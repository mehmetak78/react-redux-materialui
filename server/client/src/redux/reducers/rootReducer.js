
import {combineReducers} from "redux";

import {reducer as reduxFormReducer} from "redux-form";

import userReducer from "./userReducer";
import layoutReducer from "./layoutReducer";

const rootReducer = combineReducers( {
    form:reduxFormReducer,
    user:userReducer,
    layout:layoutReducer
});

export default rootReducer;

