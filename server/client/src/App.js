import React, { Component } from 'react';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


import {configureStore} from "./redux/store";
import {initApp} from "./redux/actions/actions";
import MainPage from "./layouts/MainPage";

const reduxStore = configureStore();
reduxStore.dispatch(initApp());

class App extends Component {
    render() {
        return (
            <Provider store={reduxStore}>
                <BrowserRouter>
                    <MainPage/>
                </BrowserRouter>
            </Provider>
        );
    }
}
export default App;
