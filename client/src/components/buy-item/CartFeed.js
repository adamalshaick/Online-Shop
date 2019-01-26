import React, { Component } from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

class CartFeed extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <div className="row">
          {cartItems.map(item => (
            <CartItem key={item._id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

CartFeed.propTypes = {
  cartItems: PropTypes.array.isRequired
};

export default CartFeed;
