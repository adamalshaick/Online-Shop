import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addReview } from "../../actions/reviewActions";
import PropTypes from "prop-types";
import isEmpty from "../../validation/is-empty";
import ReviewForm from "../reviews/ReviewForm";

import Reviews from "../reviews/Reviews";

const Header = styled.header`
  width: 100%;
  background-color: whitesmoke;
  height: 60px;
  border: solid lightgrey 1px;
  margin-bottom: 20px;
  margin-top: 50px;
  padding: 16px;
  font-size: 18px;
`;

class ProfileContent extends Component {
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

  onSubmit = (handle, id) => e => {
    e.preventDefault();

    const reviewData = {
      text: this.state.text,
      rate: this.state.rate,
      handle: handle,
      id: id
    };

    this.props.addReview(reviewData);
  };

  render() {
    const { auth, profile, errors } = this.props;

    return (
      <>
        <div className="row">
          <Header className="text-center">
            <strong>{profile.handle}'s Profile</strong>
          </Header>
          <div
            style={{ backgroundColor: "whitesmoke", borderRadius: "5px" }}
            className="col-md-6 text-center"
          >
            <img className="rounded-circle" src={profile.user.avatar} alt="" />
            <div className="text-center">
              <div className="mt-3">
                <strong>{auth.user.name}</strong>
              </div>

              {isEmpty(profile.bio) ? (
                <div className="mt-3 text-muted">
                  <i>User doesn't have a bio yet</i>
                </div>
              ) : (
                <div className="mt-3">{profile.bio}</div>
              )}
            </div>
            <div className="row">
              <div className="col-lg-6 mt-5">
                <div className="mt-4">
                  <strong>Rating average: 5/5</strong>
                  <div style={{ color: "gold" }}>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
              </div>
            </div>
            <button
              style={{ border: "lightgray solid 1px", width: "100%" }}
              className="btn btn-light btn-lg mt-2 mb-3"
              onClick={this.onClickRev}
            >
              Write a review
            </button>
          </div>
          <div className="col-md-6">
            <Reviews currentProfile={profile} />
          </div>
        </div>
        {this.state.showReviewInput ? (
          <ReviewForm
            onClickRev={this.onClickRev}
            text={this.state.text}
            rate={this.state.rate}
            errors={errors}
            onChange={this.onChange}
            onSubmit={this.onSubmit(profile.handle, profile.user._id)}
          />
        ) : null}
      </>
    );
  }
}

ProfileContent.propTypes = {
  addReview: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addReview }
)(ProfileContent);
