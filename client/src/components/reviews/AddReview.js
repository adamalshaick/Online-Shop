import React, { Component } from "react";
import { connect } from "react-redux";
import { addReview } from "../../actions/reviewActions";
import ReviewForm from "../reviews/ReviewForm";
import { Button } from "../common/styles/Button";
import handleInputErrors from "../common/hoc/handleInputErrors";
import PropTypes from "prop-types";

export class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReviewInput: false,
      text: "",
      rate: ""
    };
  }

  onClickRev = () => {
    this.setState(prevState => ({
      showReviewInput: !prevState.showReviewInput
    }));
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (id, name) => e => {
    e.preventDefault();
    const reviewData = {
      text: this.state.text,
      rate: this.state.rate,
      id: id,
      name: name
    };
    this.props.addReview(reviewData);
  };
  render() {
    const { errors, user } = this.props;
    return (
      <>
        <Button
          id="toggleBtn"
          className="btn btn-light btn-lg mt-2 mb-3"
          onClick={this.onClickRev}
        >
          Write a review
        </Button>
        <div>
          {this.state.showReviewInput ? (
            <ReviewForm
              id="reviewForm"
              onClickRev={this.onClickRev}
              text={this.state.text}
              rate={this.state.rate}
              errors={errors}
              onChange={this.onChange}
              onSubmit={this.onSubmit(user._id, user.name)}
            />
          ) : null}
        </div>
      </>
    );
  }
}

AddReview.propTypes = {
  addReview: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default connect(
  null,
  { addReview }
)(handleInputErrors(AddReview));
