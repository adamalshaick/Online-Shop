import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Navbar } from "../../../components/layout/Navbar";

const mockLogout = jest.fn();

describe("render component", () => {
  const Props = {
    auth: {}
  };

  const wrapper = shallow(<Navbar {...Props} logoutUser={mockLogout} />);
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("user is logged in", () => {
  const loggedProps = {
    auth: { isAuthenticated: true }
  };

  const wrapper = shallow(<Navbar {...loggedProps} logoutUser={mockLogout} />);

  it("shows auth links", () => {
    expect(wrapper.find("#itemsLink").length).toEqual(1);
    expect(wrapper.find("#dashboardLink").length).toEqual(1);
    expect(wrapper.find("#cartLink").length).toEqual(1);
    expect(wrapper.find("#logoutLink").length).toEqual(1);
  });

  it("doesn't show guest links", () => {
    expect(wrapper.find("#loginLink").length).toEqual(0);
    expect(wrapper.find("#registerLink").length).toEqual(0);
  });

  it("logs out user", () => {
    wrapper.find("#logoutLink").simulate("click", { preventDefault() {} });
    expect(mockLogout.mock.calls.length).toEqual(1);
  });
});

describe("user is not logged in", () => {
  const noLoggedProps = {
    auth: { isAuthenticated: false }
  };

  const wrapper = shallow(
    <Navbar {...noLoggedProps} logoutUser={mockLogout} />
  );

  it("doesn't show auth links", () => {
    expect(wrapper.find("#itemsLink").length).toEqual(0);
    expect(wrapper.find("#dashboardLink").length).toEqual(0);
    expect(wrapper.find("#cartLink").length).toEqual(0);
    expect(wrapper.find("#logoutLink").length).toEqual(0);
  });

  it("shows guest links", () => {
    expect(wrapper.find("#loginLink").length).toEqual(1);
    expect(wrapper.find("#registerLink").length).toEqual(1);
  });
});
