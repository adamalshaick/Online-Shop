import React from "react";
import { CreateProfile } from "../../../components/create-profile/CreateProfile";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const mockCreateProfilefn = jest.fn();
const Props = {
  errors: {}
};
let wrapper;

wrapper = shallow(
  <CreateProfile {...Props} createProfile={mockCreateProfilefn} />
);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

it("displays form", () => {
  expect(wrapper.find("form").length).toEqual(1);
});

it("should call the mock create profile function", () => {
  wrapper.find("form").simulate("submit", { preventDefault() {} });
  expect(mockCreateProfilefn.mock.calls.length).toBe(1);
});

describe("create profile action", () => {
  const profileData = new FormData();
  profileData.append("handle", "handle value");
  profileData.append("location", "location value");
  profileData.append("bio", "bio value");

  wrapper
    .find("#handle")
    .simulate("change", { target: { name: "handle", value: "handle value" } });
  wrapper.find("#location").simulate("change", {
    target: { name: "location", value: "location value" }
  });
  wrapper
    .find("#bio")
    .simulate("change", { target: { name: "bio", value: "bio value" } });

  it("calls function with correct data", () => {
    expect(mockCreateProfilefn.mock.calls[0][0]).toEqual(profileData);
  });
});
