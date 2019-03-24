import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../../actions/userActions";
import Loading from "../Loading";
import Navbar from "../../layout/Navbar";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.props.getCurrentUser();
    }

    render() {
      const { currentUser } = this.props.user;
      if (!currentUser) {
        return (
          <>
            <Navbar />
            <Loading />
          </>
        );
      }
      return (
        <>
          <Navbar />
          <ChildComponent {...this.props} />
        </>
      );
    }
  }

  const mapStateToProps = state => ({
    user: state.user
  });

  return connect(
    mapStateToProps,
    { getCurrentUser }
  )(ComposedComponent);
};
