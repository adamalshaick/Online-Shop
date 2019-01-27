import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "./Item";

class ItemFeed extends Component {
  render() {
    const { items } = this.props;

    return (
      <>
        <h1 className="m-5">Items for sale</h1>
        <div className="row">
          {items.map(item => (
            <Item key={item._id} item={item} />
          ))}
        </div>
      </>
    );
  }
}

ItemFeed.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemFeed;
