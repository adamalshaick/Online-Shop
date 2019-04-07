import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeItemFromCart } from "../../actions/cartActions";
import { Link } from "react-router-dom";

const onDeleteClick = (id, removeItemFromCart) => e => {
  e.preventDefault();
  removeItemFromCart(id);
};

export const CartItem = ({ item, removeItemFromCart }) => {
  return (
    <div className="entry2x" style={{ width: "100%" }}>
      <img
        style={{ maxWidth: "50px", maxHeight: "50px" }}
        src={item.itemImage}
        alt=""
      />
      {item.title}

      <button
        onClick={onDeleteClick(item._id, removeItemFromCart)}
        type="button"
        className="btn btn-danger ml-3 float-right"
      >
        Remove
      </button>

      <Link
        to={`/profile/${item.user}`}
        className="btn btn-light float-right ml-3 d-none d-sm-block"
      >
        Seller's Profile
      </Link>

      <span className="mt-2 float-right">{item.price} $</span>
      <hr />
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  removeItemFromCart: PropTypes.func.isRequired
};

export default connect(
  null,
  { removeItemFromCart }
)(CartItem);
