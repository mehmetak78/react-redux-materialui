import {LOGIN_USER, LOGOUT_USER} from "../actions/actionTypes";

const initialState = {
    isAuthenticatied : false,
    userId : 0,
    userName :""
};

export default function(state=initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {isAuthenticated:true, userId:1, userName:action.payload.userName};
        case LOGOUT_USER:
            return {isAuthenticated:false, userId:0, userName:""};
        default:
            return state;
    }
}