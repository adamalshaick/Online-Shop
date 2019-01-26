import React, { Component } from "react";
import { connect } from "react-redux";
import { getItemsFromCart } from "../../actions/itemActions";
import CartItem from "./CartItem";
import CartFeed from "./CartFeed";

class Cart extends Component {
  componentDidMount() {
    this.props.getItemsFromCart();
  }

  render() {
    const { cart, loading } = this.props.cart;

    let itemContent;
    if (cart === null || loading) {
      itemContent = <p>Loading ...</p>;
    } else {
      itemContent = <CartFeed cartItems={cart} />;
    }

    return <div>{itemContent}</div>;
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { getItemsFromCart }
)(Cart);
