import React, { Component } from "react";
import { connect } from "react-redux";
import { getItemsFromCard } from "../../actions/itemActions";
import ItemFeed from "../items/ItemFeed";

class Card extends Component {
  componentDidMount() {
    this.props.getItemsFromCard();
  }

  render() {
    const { cardItems } = this.props;

    let itemContent;
    if (cardItems.cardItems.items === null) {
      itemContent = <p>Loading ...</p>;
    } else {
      console.log(cardItems.cardItems.items);
      //   cardItems.cardItems.items.map(item => {});
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
