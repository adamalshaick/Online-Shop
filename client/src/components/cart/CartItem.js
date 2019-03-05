import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removeItemFromCart } from "../../actions/cartActions";
import { getProfileById } from "../../actions/profileActions";
import { Link } from "react-router-dom";

export class CartItem extends Component {
  componentDidMount() {
    this.props.getProfileById(this.props.item.user);
  }

  onDeleteClick(id) {
    this.props.removeItemFromCart(id);
  }

  render() {
    const { item, loading } = this.props;
    const { profileById } = this.props.profile;
    return (
      <div style={{ width: "100%" }}>
        <img
          style={{ height: "50px", width: "50px" }}
          // src={`../../uploads/post_image/${item.itemImage}`}
          src="../../uploads/post_image/placeholder.png"
          alt=""
        />
        {item.title}

        <button
          onClick={this.onDeleteClick.bind(this, item._id)}
          type="button"
          className="btn btn-danger ml-3 float-right"
        >
          Remove
        </button>

        {profileById === null || loading ? null : (
          <Link
            to={`/profile/${profileById.handle}`}
            className="btn btn-light float-right ml-3 d-none d-sm-block"
          >
            Seller's Profile
          </Link>
        )}

        <span className="mt-2 float-right">{item.price} $</span>
        <hr />
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { removeItemFromCart, getProfileById }
)(CartItem);
