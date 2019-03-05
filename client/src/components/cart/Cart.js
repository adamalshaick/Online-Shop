import React, { Component } from "react";
import { connect } from "react-redux";
import { getItemsFromCart } from "../../actions/cartActions";
import { getCurrentProfile } from "../../actions/profileActions";
import CartFeed from "./CartFeed";
import Loading from "../common/Loading";
import Navbar from "../layout/Navbar";
import PropTypes from "prop-types";

export class Cart extends Component {
  componentDidMount() {
    this.props.getItemsFromCart();
    this.props.getCurrentProfile();
  }

  render() {
    const { cart, loading } = this.props.cart;
    const { profile } = this.props.profile;

    let cartContent;
    if (cart === null || loading || profile === null) {
      cartContent = <Loading />;
    } else {
      if (Object.keys(profile).length > 0) {
        cartContent = <CartFeed cartItems={cart} />;
      } else {
        this.props.history.push("/create-profile");
      }
    }

    return (
      <>
        <Navbar />
        <div className="container">{cartContent}</div>
      </>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getItemsFromCart: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  cart: state.cart,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getItemsFromCart, getCurrentProfile }
)(Cart);
