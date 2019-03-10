import { takeLatest, put, call } from "redux-saga/effects";
import * as kanyeQuoteActionTypes from "../kanye-quote/constants";
import * as kanyeQuoteActions from "../kanye-quote/actions";

const KANYE_FETCH_URL = "https://api.kanye.rest";

export function* getKanyeQuote() {
  const response = yield call(fetch, KANYE_FETCH_URL);
  if (response.ok) {
    const data = yield response.json();
    yield put(
      kanyeQuoteActions.kanyeQuoteSuccess({
        quote: data.quote
      })
    );
  }
}

export function* kanyeQuoteRequestWatcher() {
  yield takeLatest(
    kanyeQuoteActionTypes.GET_KANYE_QUOTE_REQUEST,
    getKanyeQuote
  );
}
