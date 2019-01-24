import React, { Component } from "react";
import { connect } from "react-redux";
import { getItemsFromCard } from "../../actions/itemActions";
import ItemFeed from "../items/ItemFeed";

class Card extends Component {
  componentDidMount() {
    this.props.getItemsFromCard();
  }

  render() {
    const { cart, loading } = this.props.cart;

    let itemContent;
    if (cart === null || loading) {
      itemContent = <p>Loading ...</p>;
    } else {
      console.log(cart.items);
    }

    return <div>{itemContent}</div>;
  }
}

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { getItemsFromCard }
)(Card);
