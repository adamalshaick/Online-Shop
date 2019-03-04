import React from "react";
import { EditProfile } from "../../../components/edit-profile/EditProfile";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const mockCreateProfilefn = jest.fn();
const mockgetCurrentProfilefn = jest.fn();

const Props = {
  profile: {},
  errors: {}
};
let wrapper;

wrapper = shallow(
  <EditProfile
    {...Props}
    createProfile={mockCreateProfilefn}
    getCurrentProfile={mockgetCurrentProfilefn}
  />
);

describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

it("displays form", () => {
  expect(wrapper.find("form").length).toEqual(1);
});

it("should call the mock edit profile function", () => {
  wrapper.find("form").simulate("submit", { preventDefault() {} });
  expect(mockCreateProfilefn.mock.calls.length).toBe(1);
});

describe("edit profile action", () => {
  const profileData = {
    handle: "handle value",
    location: "location value",
    bio: "bio value"
  };

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
