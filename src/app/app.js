import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import ReduxPromise from "redux-promise";
import reducers from "../reducers";
import Layout from "../components/Layout";

const app = document.getElementById('app');
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <Layout/>
        </Provider> , app);
