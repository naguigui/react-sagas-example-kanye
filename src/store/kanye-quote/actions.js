import { createAction } from "redux-actions";
import * as kanyeQuoteActionTypes from "./constants";

export const kanyeQuoteRequest = createAction(
  kanyeQuoteActionTypes.GET_KANYE_QUOTE_REQUEST
);
export const kanyeQuoteSuccess = createAction(
  kanyeQuoteActionTypes.GET_KANYE_QUOTE_SUCCESS
);
export const kanyeQuoteError = createAction(
  kanyeQuoteActionTypes.GET_KANYE_QUOTE_ERROR
);
