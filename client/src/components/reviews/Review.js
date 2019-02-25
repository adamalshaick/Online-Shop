import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getProfileById } from "../../actions/profileActions";
import Loading from "../common/Loading";

const ReviewItem = styled.div`
  background-color: whitesmoke;
  margin: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0.3rem;
  padding: 2rem;
`;

class Review extends Component {
  render() {
    const { review, auth } = this.props;
    const { loading, profile } = this.props.profile;
    let reviewItem;

    if (profile === null || loading) {
      reviewItem = <Loading />;
    } else {
      reviewItem = (
        <div className="row">
          <div className="row mt-3">
            <img
              style={{ width: "40px", height: "40px" }}
              className="rounded-circle  ml-4"
              src={review.avatar}
              alt=""
            />

            <div className="text-center mt-2 ml-2 ">
              <strong>rate: {review.rate}</strong>
            </div>
          </div>
          <div className="col-12">
            <div style={{ fontSize: "0.9rem" }} className="float-left ml-2">
              {review.text}
            </div>
          </div>
        </div>
      );
    }
    return <>{reviewItem}</>;
  }
}

Review.propTypes = {
  review: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileById }
)(Review);
