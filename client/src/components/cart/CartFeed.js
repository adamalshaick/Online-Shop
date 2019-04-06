import React from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { Header } from "../common/styles/Header";

export const CartFeed = ({ cartItems }) => {
  let cartValue = 0;
  cartItems.forEach(item => {
    cartValue = +item.price + cartValue;
  });
  return (
    <div>
      <div className="entry">
        <Header>
          <span style={{ fontSize: "18px", float: "left" }}>
            <i className="mr-2 fas fa-shopping-cart" />
            <strong>Your cart</strong>
          </span>
          <span style={{ fontSize: "18px", float: "right" }}>
            <strong>Amount: {cartValue} $</strong>
          </span>
        </Header>

        {cartItems.map(item => (
          <CartItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

CartFeed.propTypes = {
  cartItems: PropTypes.array.isRequired
};

export default CartFeed;
