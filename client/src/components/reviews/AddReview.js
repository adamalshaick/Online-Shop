import React, { Component } from "react";
import { connect } from "react-redux";
import { addReview } from "../../actions/reviewActions";
import ReviewForm from "../reviews/ReviewForm";
import { Button } from "../common/styles/Button";

class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReviewInput: false,
      text: "",
      rate: "",
      errors: {}
    };
  }
  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onClickRev = () => {
    this.state.showReviewInput
      ? this.setState({ showReviewInput: false })
      : this.setState({ showReviewInput: true });
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
    const { errors, auth, profile } = this.props;
    return (
      <>
        <Button
          className="btn btn-light btn-lg mt-2 mb-3"
          onClick={this.onClickRev}
        >
          Write a review
        </Button>
        <div>
          {this.state.showReviewInput ? (
            <ReviewForm
              onClickRev={this.onClickRev}
              text={this.state.text}
              rate={this.state.rate}
              errors={errors}
              onChange={this.onChange}
              onSubmit={this.onSubmit(
                profile.user._id,
                auth.user.name,
                auth.user.avatar
              )}
            />
          ) : null}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addReview }
)(AddReview);
