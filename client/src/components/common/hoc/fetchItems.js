import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../Loading";
import Navbar from "../../layout/Navbar";
import { getItems } from "../../../actions/itemActions";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.props.getItems();
    }

    render() {
      const { items } = this.props.item;
      if (!items) {
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
    item: state.item
  });

  return connect(
    mapStateToProps,
    { getItems }
  )(ComposedComponent);
};
