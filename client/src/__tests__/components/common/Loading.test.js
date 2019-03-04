import React from "react";
import Loading from "../../../components/common/Loading";
import renderer from "react-test-renderer";

const wrapper = renderer.create(<Loading />).toJSON();

describe("render component", () => {
  it("renders component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
