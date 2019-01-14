import React, { Component } from "react";
import { connect } from "react-redux";
export default class BuyItem extends Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({
  items: state.items
});
