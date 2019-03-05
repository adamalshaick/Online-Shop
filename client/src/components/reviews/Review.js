import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfileById } from "../../actions/profileActions";
import Loading from "../common/Loading";

class Review extends Component {
  stars = review => {
    const stars = [];
    for (let i = 0; i < review.rate; i++) {
      stars.push(<i style={{ color: "grey" }} className="fas fa-star" />);
    }
    return stars;
  };

  render() {
    const { review } = this.props;
    const { loading, profile } = this.props.profile;
    let reviewItem;

    if (profile === null || loading) {
      reviewItem = <Loading />;
    } else {
      reviewItem = (
        <div className="row">
          <div className="row mt-3">
            <div className="mt-1 ml-1">{review.buyer}</div>
            <div
              className="text-left"
              style={{ position: "absolute", right: "0", width: "180px" }}
            >
              <strong style={{ marginRight: "10px" }}>
                rate: {review.rate}
              </strong>

              {this.stars(review)}
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
