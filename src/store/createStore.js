import { applyMiddleware, compose, createStore } from "redux";

import createSagaMiddleware from "redux-saga";

import kanyeQuoteReducer from "./kanye-quote/reducers";

import { kanyeQuoteRequestWatcher } from "./kanye-quote/sagas";

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware({});

  const store = createStore(
    kanyeQuoteReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(kanyeQuoteRequestWatcher);

  return store;
};
