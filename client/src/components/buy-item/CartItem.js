import React, { Component } from "react";
import { connect } from "react-redux";
import { getItem } from "../../actions/itemActions";
import PropTypes from "prop-types";

class CartItem extends Component {
  render() {
    const { item } = this.props;
    // const { cartItem } = this.props.cartItem;

    // console.log(cartItem._id);
    return (
      <div className="col-4">
        <div>
          <div
            style={{
              boxShadow:
                " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
            }}
            className="text-center m-3"
          >
            <img
              style={{ width: "100%", maxHeight: "500px" }}
              className=" d-none d-md-block"
              src={`../../uploads/post_image/${item.itemImage}`}
              alt=""
            />
            <p className="lead">
              <strong>{item.title}</strong>
            </p>
            <p style={{ fontSize: "2rem" }}>{item.price} $</p>
          </div>
        </div>

        {/* <div className="col-12">{cartItem._id}</div> */}
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default CartItem;
