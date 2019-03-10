import * as kanyeQuoteActionTypes from "./constants";

const initialState = {
  isError: false,
  isLoading: false,
  quote: ""
};

const kanyeQuoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case kanyeQuoteActionTypes.GET_KANYE_QUOTE_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case kanyeQuoteActionTypes.GET_KANYE_QUOTE_SUCCESS:
      return {
        quote: action.payload.quote,
        isError: false,
        isLoading: false
      };
    case kanyeQuoteActionTypes.GET_KANYE_QUOTE_ERROR:
      return {
        ...state,
        isError: true
      };
    default:
      return state;
  }
};

export default kanyeQuoteReducer;
