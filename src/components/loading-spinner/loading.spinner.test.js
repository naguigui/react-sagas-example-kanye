import React from "react";
import LoadingSpinner from "./loading.spinner";
import renderer from "react-test-renderer";

describe("LoadingSpinner component", () => {
  it("renders", () => {
    const tree = renderer.create(<LoadingSpinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
