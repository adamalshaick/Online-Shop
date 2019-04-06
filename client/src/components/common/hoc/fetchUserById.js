import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserById } from "../../../actions/userActions";
import Loading from "../Loading";
import Navbar from "../../layout/Navbar";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      if (this.props.match.params.id) {
        this.props.getUserById(this.props.match.params.id);
      }
    }

    render() {
      const { user } = this.props.user;
      if (!user) {
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
    { getUserById }
  )(ComposedComponent);
};
