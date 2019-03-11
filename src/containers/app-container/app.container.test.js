import { AppContainerComponent } from "./app.container";
import React from "react";
import { createRenderer } from "react-test-renderer/shallow";
import { shallow } from "enzyme";

describe("AppContainer", () => {
  describe("rendering", () => {
    it("renders with a quote when isLoading is false and isError is false", () => {
      const quote = "I am a space cowboy.";
      const shallowRenderer = createRenderer();
      const tree = shallowRenderer.render(
        <AppContainerComponent
          isLoading={false}
          isError={false}
          quote={quote}
        />
      );
      expect(tree).toMatchSnapshot();
    });
    it("renders the loading state when isLoading is true and isError is false", () => {
      const shallowRenderer = createRenderer();
      const tree = shallowRenderer.render(
        <AppContainerComponent isLoading={true} isError={false} quote="" />
      );
      expect(tree).toMatchSnapshot();
    });
    it("renders the error state when isLoading is false and isError is true", () => {
      const shallowRenderer = createRenderer();
      const tree = shallowRenderer.render(
        <AppContainerComponent isLoading={false} isError={true} quote="" />
      );
      expect(tree).toMatchSnapshot();
    });
  });
  describe("getKanyeQuote()", () => {
    it("calls kanyeQuoteRequest function when invoked", () => {
      const kanyeQuoteRequestMock = jest.fn();
      const wrapper = shallow(
        <AppContainerComponent
          isLoading={false}
          isError={true}
          quote="Hello"
          kanyeQuoteRequest={kanyeQuoteRequestMock}
        />
      );
      wrapper.instance().getKanyeQuote();
      expect(kanyeQuoteRequestMock).toHaveBeenCalledTimes(1);
    });
  });
  describe("componentDidMount", () => {
    it("calls the instance method getKanyeQuote()", () => {
      const wrapper = shallow(
        <AppContainerComponent
          isLoading={false}
          isError={true}
          quote="Hello"
          kanyeQuoteRequest={() => {}}
        />
      );
      wrapper.instance().getKanyeQuote = jest.fn();
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().getKanyeQuote).toHaveBeenCalledTimes(1);
    });
  });
});
