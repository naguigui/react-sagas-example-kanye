import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createStore from "./store/createStore";
import "./index.css";
import AppContainer from "./containers/app-container";
import * as serviceWorker from "./serviceWorker";

const store = createStore();

const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  MOUNT_NODE
);

serviceWorker.unregister();
