import React, { Component } from "react";
import { connect } from "react-redux";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      if (this.props.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
      }
    }

    componentDidUpdate() {
      if (this.props.auth.isAuthenticated) {
        this.props.history.push("/dashboard");
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth
  });

  return connect(mapStateToProps)(ComposedComponent);
};
