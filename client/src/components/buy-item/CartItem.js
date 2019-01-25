import React, { Component } from "react";
import { connect } from "react-redux";
import { getItem } from "../../actions/itemActions";
import PropTypes from "prop-types";

class CartItem extends Component {
  componentDidMount() {
    this.props.getItem(this.props.id);
  }
  render() {
    const { cartItem } = this.props.cartItem;

    console.log(cartItem.category);
    return (
      <div>
        {cartItem.category}
        {/* {item.item._id} */}
      </div>
    );
  }
}

CartItem.propTypes = {
  getItem: PropTypes.func.isRequired,
  cartItem: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  cartItem: state.cartItem
});

export default connect(
  mapStateToProps,
  { getItem }
)(CartItem);
