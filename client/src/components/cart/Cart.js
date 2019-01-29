import React, { Component } from "react";
import { connect } from "react-redux";
import { getItemsFromCart } from "../../actions/cartActions";
import CartFeed from "./CartFeed";
import Loading from "../common/Loading";

class Cart extends Component {
  componentDidMount() {
    this.props.getItemsFromCart();
  }

  render() {
    const { cart, loading } = this.props.cart;

    let cartContent;
    if (cart === null || loading) {
      cartContent = <Loading />;
    } else {
      cartContent = <CartFeed cartItems={cart} />;
    }

    return <>{cartContent}</>;
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { getItemsFromCart }
)(Cart);
