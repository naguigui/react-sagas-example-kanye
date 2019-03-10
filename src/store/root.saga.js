import { all } from "redux-saga/effects";
import { kanyeQuoteRequestWatcher } from "./kanye-quote/sagas";

export default function* rootSaga() {
  yield all([kanyeQuoteRequestWatcher()]);
}
