import React, { Component } from "react";
import PropTypes from "prop-types";

class CartItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div style={{ width: "100%" }}>
        <img
          style={{ height: "50px", width: "50px" }}
          src={`../../uploads/post_image/${item.itemImage}`}
          alt=""
        />
        {item.title}
        <button
          style={{ float: "right" }}
          // onClick={this.onDeleteClick()}
          className="btn btn-danger ml-3"
        >
          Remove
        </button>
        <span style={{ float: "right" }} className="mt-2">
          {item.price} $
        </span>

        <hr />
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default CartItem;
