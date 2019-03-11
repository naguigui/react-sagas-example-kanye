import { createAction } from "redux-actions";
import * as kanyeQuoteActionTypes from "./constants";

export const kanyeQuoteRequest = createAction(
  kanyeQuoteActionTypes.KANYE_QUOTE_REQUEST
);
export const kanyeQuoteSuccess = createAction(
  kanyeQuoteActionTypes.KANYE_QUOTE_SUCCESS
);
export const kanyeQuoteError = createAction(
  kanyeQuoteActionTypes.KANYE_QUOTE_ERROR
);
