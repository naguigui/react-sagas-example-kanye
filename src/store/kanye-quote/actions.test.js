import * as kanyeQuoteActions from "./actions";
import * as kanyeQuoteActionTypes from "./constants";

const payload = {};

describe("Kanye quote actions", () => {
  describe("kanyeQuoteRequest", () => {
    it("should return an action for kanyeQuoteRequest", () => {
      const action = kanyeQuoteActions.kanyeQuoteRequest(payload);
      expect(action).toEqual({
        type: kanyeQuoteActionTypes.KANYE_QUOTE_REQUEST,
        payload
      });
    });
  });

  describe("kanyeQuoteSuccess", () => {
    it("should return an action for kanyeQuoteSuccess", () => {
      const action = kanyeQuoteActions.kanyeQuoteSuccess(payload);
      expect(action).toEqual({
        type: kanyeQuoteActionTypes.KANYE_QUOTE_SUCCESS,
        payload
      });
    });
  });

  describe("kanyeQuoteError", () => {
    it("should return an action for kanyeQuoteError", () => {
      const action = kanyeQuoteActions.kanyeQuoteError(payload);
      expect(action).toEqual({
        type: kanyeQuoteActionTypes.KANYE_QUOTE_ERROR,
        payload
      });
    });
  });
});
