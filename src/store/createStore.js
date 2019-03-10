import { applyMiddleware, compose, createStore } from "redux";

import createSagaMiddleware from "redux-saga";

// import { makeRootReducer } from "./reducer";
import kanyeQuoteReducer from "./kanye-quote/reducers";

import rootSaga from "./root.saga";

export default (initialState = {}) => {
  let store;

  const sagaMiddleware = createSagaMiddleware({});
  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }

  // ======================================================
  // Store Instantiation
  // ======================================================
  store = createStore(
    kanyeQuoteReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      ...enhancers
    )
  );
  store.asyncReducers = {};

  sagaMiddleware.run(rootSaga);

  return store;
};
