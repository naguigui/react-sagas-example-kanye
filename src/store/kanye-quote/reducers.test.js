import kanyeQuoteReducer from "./reducers";
import * as kanyeQuoteActions from "./actions";

const initialState = {
  isError: false,
  isLoading: false,
  quote: ""
};

describe("kanyeQuoteReducer", () => {
  it("should return the initial state", () => {
    const result = kanyeQuoteReducer(initialState, {});
    expect(result).toEqual(initialState);
  });
  it("initializes initial state if not provided", () => {
    const result = kanyeQuoteReducer(undefined, {});
    expect(result).toEqual(initialState);
  });

  describe("KANYE_QUOTE_REQUEST action", () => {
    it("sets isLoading to true", () => {
      const action = kanyeQuoteActions.kanyeQuoteRequest();
      const result = kanyeQuoteReducer(initialState, action);
      expect(result.isLoading).toBe(true);
      expect(result).toMatchSnapshot("new state");
    });
  });

  describe("KANYE_QUOTE_SUCCESS action", () => {
    it("updates quote with a payload and sets isLoading and isError to false", () => {
      const payload = {
        quote: "I am real quote"
      };
      const action = kanyeQuoteActions.kanyeQuoteSuccess(payload);
      const result = kanyeQuoteReducer(initialState, action);
      expect(result.isLoading).toBe(false);
      expect(result.isError).toBe(false);
      expect(result).toMatchSnapshot("new state");
    });
  });

  describe("KANYE_QUOTE_ERROR action", () => {
    it("sets isError to true", () => {
      const action = kanyeQuoteActions.kanyeQuoteError();
      const result = kanyeQuoteReducer(initialState, action);
      expect(result.isError).toBe(true);
      expect(result).toMatchSnapshot("new state");
    });
  });
});
