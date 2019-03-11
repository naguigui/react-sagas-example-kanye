import { takeLatest, call, put } from "redux-saga/effects";
import * as kanyeQuoteActions from "./actions";
import * as kanyeSagas from "./sagas";
import { fetchData } from "../../utils/fetchData";

const KANYE_FETCH_URL = "https://api.kanye.rest";

describe("kanyeQuoteRequestWatcher()", () => {
  it("should call the getKanyeQuote function", () => {
    const gen = kanyeSagas.kanyeQuoteRequestWatcher();
    expect(gen.next().value).toEqual(
      takeLatest("GET_KANYE_QUOTE_REQUEST", kanyeSagas.getKanyeQuote)
    );
  });
});

describe("getKanyeQuote()", () => {
  it("successfully makes the fetch call and stores the correct data", () => {
    const payload = {
      quote: "hello"
    };

    const gen = kanyeSagas.getKanyeQuote();

    const fetchCall = gen.next().value;
    expect(fetchCall).toEqual(call(fetchData, KANYE_FETCH_URL));

    expect(gen.next(payload).value).toEqual(
      put(
        kanyeQuoteActions.kanyeQuoteSuccess({
          quote: payload.quote
        })
      )
    );
  });
  it("fails to make the fetch call", () => {
    const gen = kanyeSagas.getKanyeQuote();

    gen.next();

    expect(gen.throw(new Error()).value).toEqual(
      put(kanyeQuoteActions.kanyeQuoteError())
    );
  });
});
