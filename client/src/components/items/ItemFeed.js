import React, { Component } from "react";
import PropTypes from "prop-types";
import ItemItem from "./ItemItem";

class ItemFeed extends Component {
  render() {
    const { items } = this.props;

    return items.map(item => <ItemItem key={item._id} item={item} />);
  }
}

ItemFeed.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemFeed;
