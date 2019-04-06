import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { ProfileContent } from "../../../components/profile/ProfileContent";
import AddReview from "../../../components/reviews/AddReview";

const mockDeleteFn = jest.fn();

describe("render component", () => {
  const Props = {
    user: {},
    auth: { user: {} }
  };
  const wrapper = shallow(
    <ProfileContent {...Props} deleteAccount={mockDeleteFn} />
  );
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("current user's profile", () => {
  const currentUserProps = {
    user: { _id: "matchId" },
    auth: { user: { id: "matchId" } }
  };
  const wrapper = shallow(
    <ProfileContent {...currentUserProps} deleteAccount={mockDeleteFn} />
  );

  it("shows delete profile button", () => {
    expect(wrapper.find("#delete").length).toEqual(1);
  });

  //   it("doesn't show add review button", () => {
  //     const component = wrapper.dive();
  //     expect(component.find(<AddReview />).length).toEqual(0);
  //   });

  //   it("calls mock delete profile function", () => {
  //     wrapper.find("#delete").simulate("click", { preventDefault() {} });
  //     expect(mockDeleteFn.mock.calls.length).toEqual(1);
  //   });
});

describe("other user's pofile", () => {
  const otherUserProps = {
    user: { _id: "matchId" },
    auth: { user: { id: "otherId" } }
  };
  const wrapper = shallow(
    <ProfileContent {...otherUserProps} deleteAccount={mockDeleteFn} />
  );

  it("doesn't show delete profile button", () => {
    expect(wrapper.find("#delete").length).toEqual(0);
  });

  //   it("shows add review button", () => {
  //     const component = wrapper.dive();
  //     expect(component.find(<AddReview />).length).toEqual(1);
  //   });
});
