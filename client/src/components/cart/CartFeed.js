import React, { Component } from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { Header } from "../common/styles/Header";
import { connect } from "react-redux";
import { buyItems } from "../../actions/cartActions";

export class CartFeed extends Component {
  render() {
    const { cartItems } = this.props;
    let cartValue = 0;
    cartItems.forEach(item => {
      cartValue = +item.price + cartValue;
    });
    return (
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
        <div className="float-right mb-5">
          <div>
            <small>(Not working yet, about to be implemented)</small>
          </div>
          <button
            type="button"
            onClick={this.onClick}
            className="btn btn-success float-right mb-5"
          >
            Buy Items <i className="fas fa-arrow-circle-right ml-2" />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

CartFeed.propTypes = {
  cartItems: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired,
  buyItems: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  { buyItems }
)(CartFeed);
