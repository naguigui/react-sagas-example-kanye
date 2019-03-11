import { takeLatest, put, call } from "redux-saga/effects";
import * as kanyeQuoteActionTypes from "../kanye-quote/constants";
import * as kanyeQuoteActions from "../kanye-quote/actions";
import { fetchData } from "../../utils/fetchData";

const KANYE_FETCH_URL = "https://api.kanye.rest";

export function* getKanyeQuote() {
  try {
    const payload = yield call(fetchData, KANYE_FETCH_URL);
    const { quote } = payload;
    yield put(
      kanyeQuoteActions.kanyeQuoteSuccess({
        quote
      })
    );
  } catch (e) {
    yield put(kanyeQuoteActions.kanyeQuoteError());
  }
}

export function* kanyeQuoteRequestWatcher() {
  yield takeLatest(kanyeQuoteActionTypes.KANYE_QUOTE_REQUEST, getKanyeQuote);
}
