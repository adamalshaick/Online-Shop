import React, { Component } from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import styled from "styled-components";

const Heading = styled.header`
  width: 100%;
  background-color: whitesmoke;
  height: 60px;
  border: solid lightgrey 1px;
  margin-bottom: 20px;
  margin-top: 50px;
  padding: 14px;
`;

export class CartFeed extends Component {
  render() {
    const { cartItems } = this.props;
    let cartValue = 0;
    cartItems.forEach(item => {
      cartValue = +item.price + cartValue;
    });
    return (
      <div className="entry">
        <Heading>
          <span style={{ fontSize: "18px" }} className="d-inline align-middle">
            <i className="mr-2 fas fa-shopping-cart" />
            <strong>Your cart</strong>
          </span>
          <span style={{ fontSize: "18px", float: "right" }}>
            <strong>Amount: {cartValue} $</strong>
          </span>
        </Heading>

        {cartItems.map(item => (
          <CartItem key={item._id} item={item} />
        ))}
        <button className="btn btn-success float-right">
          Buy Items <i className="fas fa-arrow-circle-right ml-2" />
        </button>
      </div>
    );
  }
}

CartFeed.propTypes = {
  cartItems: PropTypes.array.isRequired
};

export default CartFeed;
