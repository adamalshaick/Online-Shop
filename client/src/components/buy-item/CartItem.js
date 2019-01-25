import React, { Component } from "react";
import { connect } from "react-redux";
import { getItem } from "../../actions/itemActions";
import PropTypes from "prop-types";

class CartItem extends Component {
  componentDidMount() {
    this.props.getItem(this.props.id);
  }
  render() {
    return <div>JD</div>;
  }
}

CartItem.propTypes = {
  getItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItem }
)(CartItem);
