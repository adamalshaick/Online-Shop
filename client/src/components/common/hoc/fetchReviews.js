import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../Loading";
import Navbar from "../../layout/Navbar";
import { getReviews } from "../../../actions/reviewActions";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.props.getReviews();
    }

    render() {
      const { reviews } = this.props.review;
      if (!reviews) {
        return (
          <>
            <Navbar />
            <Loading />
          </>
        );
      }
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    review: state.review
  });

  return connect(
    mapStateToProps,
    { getReviews }
  )(ComposedComponent);
};
