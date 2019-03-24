import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const ItemFeed = ({ items, currentUser }) => {
  return (
    <div className="row">
      {items.map(item => (
        <Item key={item._id} item={item} currentUser={currentUser} />
      ))}
    </div>
  );
};

ItemFeed.propTypes = {
  items: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired
};

export default ItemFeed;
