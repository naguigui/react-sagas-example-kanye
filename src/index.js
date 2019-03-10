import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./store/createStore";
import "./index.css";
import AppContainer from "./containers/app-container";
import * as serviceWorker from "./serviceWorker";

const initialState = window.__INITIAL_STATE__;
const store = createStore(initialState);

const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  MOUNT_NODE
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
