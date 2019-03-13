import {OPEN_LOGIN_PAGE, CLOSE_LOGIN_PAGE, LOGIN_USER, LOGOUT_USER} from "../actions/actionTypes";

const initialState = {
    isLogging: false,
    isAuthenticatied : false,
    userId : 0,
    userName :""
};

export default function(state=initialState, action) {
    switch(action.type) {
        case OPEN_LOGIN_PAGE:
            return {...state,isLogging:true};
        case CLOSE_LOGIN_PAGE:
            return {...state,isLogging:false};
        case LOGIN_USER:
            return {...state,isAuthenticated:true, userId:1, userName:action.payload.userName};
        case LOGOUT_USER:
            return {...state,isAuthenticated:false, userId:0, userName:""};
        default:
            return state;
    }
}