import React, { Component } from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

class CartFeed extends Component {
  render() {
    const { cartItems } = this.props;
    let cartValue = 0;
    cartItems.forEach(item => {
      cartValue = +item.price + cartValue;
    });
    return (
      <div className="entry">
        <div
          style={{
            width: "100%",
            backgroundColor: "whitesmoke",
            height: "60px",
            border: "solid lightgrey 1px",
            marginBottom: "20px",
            marginTop: "50px",
            padding: "14px"
          }}
        >
          <span style={{ fontSize: "18px" }} className="d-inline align-middle">
            <i className="mr-2 fas fa-shopping-cart" />
            <strong>Your cart</strong>
          </span>
          <span
            className="align-middle"
            style={{ fontSize: "18px", float: "right" }}
          >
            <strong>Amount: {cartValue} $</strong>
          </span>
        </div>

        {cartItems.map(item => (
          <CartItem key={item._id} item={item} />
        ))}
      </div>
    );
  }
}

CartFeed.propTypes = {
  cartItems: PropTypes.array.isRequired
};

export default CartFeed;
