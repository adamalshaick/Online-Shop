import React, { Component } from "react";
import { connect } from "react-redux";
import { getItemsFromCart } from "../../actions/cartActions";
import CartFeed from "./CartFeed";
import Loading from "../common/Loading";
import Navbar from "../layout/Navbar";

export class Cart extends Component {
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

    return (
      <>
        <Navbar />
        <div className="container">{cartContent}</div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { getItemsFromCart }
)(Cart);
