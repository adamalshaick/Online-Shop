import React, { Component } from "react";
import PropTypes from "prop-types";
import CartItem from "./CartItem";

class CartFeed extends Component {
  render() {
    const { ids } = this.props;
    return (
      <div>
        <div className="row">
          {/* {ids.forEach(id => ( */}
          <CartItem id={"5c43b9121b93f75300271aa8"} />
          {/* ))} */}
        </div>
      </div>
    );
  }
}

CartFeed.propTypes = {
  ids: PropTypes.array.isRequired
};

export default CartFeed;
