import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getProfileByHandle } from "../../actions/profileActions";
import Loading from "../common/Loading";

const ReviewItem = styled.div`
  background-color: whitesmoke;
  margin: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0.3rem;
  padding: 2rem;
`;

class Review extends Component {
  componentDidMount() {
    getProfileByHandle();
  }

  render() {
    const { review, auth } = this.props;
    const { profile, loading } = this.props.profile;
    let reviewItem;

    if (profile === null || loading) {
      reviewItem = <Loading />;
    } else {
      reviewItem = (
        <ReviewItem>
          <div className="row">
            <div className="col-md-6">
              <img
                style={{ width: "120px" }}
                className="rounded-circle"
                src={profile.user.avatar}
                alt=""
              />
              <div>
                <strong>{review.buyer}</strong>
              </div>
            </div>
            <div className="col-md-6">
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)"
                }}
              >
                {review.text}
              </div>
              <div className="float-right">
                <strong>rate: {review.rate}/5</strong>
              </div>
            </div>
          </div>
        </ReviewItem>
      );
    }
    return <>{reviewItem}</>;
  }
}

Review.propTypes = {
  review: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getProfileByHandle: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Review);
