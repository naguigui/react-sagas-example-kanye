import { combineReducers } from "redux";
import kanyeQuoteReducer from "./kanye-quote/reducers";

export const makeRootReducer = () => {
  combineReducers({
    kanyeQuote: kanyeQuoteReducer
  });
};
