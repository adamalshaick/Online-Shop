import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { AddReview } from "../../../components/reviews/AddReview";

const mockAddReview = jest.fn();

const Props = {
  user: {},
  errors: {}
};

const wrapper = shallow(<AddReview {...Props} addReview={mockAddReview} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("toggles btn", () => {
  wrapper.find("#toggleBtn").simulate("click");
  expect(wrapper.find("#reviewForm").length).toEqual(1);
  wrapper.find("#toggleBtn").simulate("click");
  expect(wrapper.find("#reviewForm").length).toEqual(0);
});

describe("calls mock add review fn", () => {
  wrapper.find("#toggleBtn").simulate("click");
  wrapper.find("#reviewForm").simulate("submit", { preventDefault() {} });
  expect(mockAddReview.mock.calls.length).toEqual(1);
});

// describe("reviews", () => {
//   it("adds review", () => {
//     wrapper.find("#addReview").simulate("click");

//   });
// });

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { addReview } from "../../actions/reviewActions";
// import ReviewForm from "../reviews/ReviewForm";
// import { Button } from "../common/styles/Button";
// import handleInputErrors from "../common/hoc/handleInputErrors";

// class AddReview extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showReviewInput: false,
//       text: "",
//       rate: ""
//     };
//   }

//   onClickRev = () => {
//     this.setState(prevState => ({
//       showReviewInput: !prevState.showReviewInput
//     }));
//   };

//   onChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   onSubmit = (id, name) => e => {
//     e.preventDefault();
//     const reviewData = {
//       text: this.state.text,
//       rate: this.state.rate,
//       id: id,
//       name: name
//     };
//     this.props.addReview(reviewData);
//   };
//   render() {
//     const { errors, user } = this.props;
//     return (
//       <>
//         <Button
//           className="btn btn-light btn-lg mt-2 mb-3"
//           onClick={this.onClickRev}
//         >
//           Write a review
//         </Button>
//         <div>
//           {this.state.showReviewInput ? (
//             <ReviewForm
//               onClickRev={this.onClickRev}
//               text={this.state.text}
//               rate={this.state.rate}
//               errors={errors}
//               onChange={this.onChange}
//               onSubmit={this.onSubmit(user._id, user.name)}
//             />
//           ) : null}
//         </div>
//       </>
//     );
//   }
// }

// export default connect(
//   null,
//   { addReview }
// )(handleInputErrors(AddReview));
