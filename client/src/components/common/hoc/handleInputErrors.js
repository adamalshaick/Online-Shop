import React, { Component } from "react";
import { connect } from "react-redux";
import { clearErrors } from "../../../actions/errorActions";

export default ChildComponent => {
  class ComposedComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { errors: {} };
    }

    componentDidUpdate(prevProps) {
      if (this.props.errors !== prevProps.errors) {
        this.setState({ errors: this.props.errors });
      }
    }

    componentWillUnmount() {
      this.props.clearErrors();
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    errors: state.errors
  });

  return connect(
    mapStateToProps,
    { clearErrors }
  )(ComposedComponent);
};
