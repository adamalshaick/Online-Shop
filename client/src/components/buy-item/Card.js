import React, { Component } from "react";
import { connect } from "react-redux";
import { getItemsFromCard } from "../../actions/itemActions";
import ItemFeed from "../items/ItemFeed";

class Card extends Component {
  componentDidMount() {
    this.props.getItemsFromCard();
  }

  render() {
    const { cart, loading } = this.props.cardItems;

    let itemContent;
    if (cart === null || loading) {
      itemContent = <p>Loading ...</p>;
    } else {
      console.log(cart.items);
      const xD = cart.items;
      console.log(xD);
      itemContent = "xD";

      const array = [0, 1, 2, 3];

      // cardItems.items.map();
    }

    return <div>{itemContent}</div>;
  }
}

const mapStateToProps = state => ({
  cardItems: state.cardItems
});

export default connect(
  mapStateToProps,
  { getItemsFromCard }
)(Card);
