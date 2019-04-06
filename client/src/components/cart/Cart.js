import React from "react";
import fetchCurrentUser from "../common/hoc/fetchCurrentUser";
import CartFeed from "./CartFeed";
import PropTypes from "prop-types";

export const Cart = ({ user }) => {
  return (
    <div className="container">
      <CartFeed cartItems={user.currentUser.cart} />
    </div>
  );
};

Cart.propTypes = {
  user: PropTypes.object.isRequired
};

export default fetchCurrentUser(Cart);
