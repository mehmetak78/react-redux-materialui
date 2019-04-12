import {createStore,  compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer"

export  function configureStore() {
    return createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk),
//            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // For Google Chrome extension. Safari fails
            //window.devToolsExtension ? window.devToolsExtension() : f => f                  // For Google Chrome extension. Safari OK
        )
    );
}
