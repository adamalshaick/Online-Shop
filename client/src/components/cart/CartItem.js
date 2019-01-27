import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeItemFromCart } from "../../actions/cartActions";

class CartItem extends Component {
  onDeleteClick(id) {
    this.props.removeItemFromCart(id);
  }

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
          onClick={this.onDeleteClick.bind(this, item._id)}
          type="button"
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
  item: PropTypes.object.isRequired,
  removeItemFromCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { removeItemFromCart }
)(CartItem);
