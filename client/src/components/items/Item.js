import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteItem } from "../../actions/itemActions";
import { addItemToCart } from "../../actions/cartActions";
import { Link } from "react-router-dom";
import { ItemCard, Image, Buttons } from "../common/styles/StyledItem";
import { SecondaryHeader } from "../common/styles/Header";

export const Item = ({ item, currentUser, addItemToCart, deleteItem }) => {
  const onAdd = id => e => {
    e.preventDefault();
    addItemToCart(id);
  };

  const onDelete = id => e => {
    e.preventDefault();
    deleteItem(id);
  };

  return (
    <div className="col-md-6 col-lg-4 p-0 entry-2x">
      <div>
        <ItemCard className="text-center m-3">
          <Image src={item.itemImage} alt="" />
          <p>{item.name}</p>
          <SecondaryHeader>{item.price} $</SecondaryHeader>
          <span>
            {item.user === currentUser.id ? (
              <button
                id="deleteItem"
                onClick={onDelete(item._id)}
                className="btn btn-danger mr-1"
              >
                <i className="fas fa-times" />
              </button>
            ) : (
              <Buttons>
                {currentUser.cart.some(
                  cartItem => cartItem._id === item._id
                ) ? null : (
                  <>
                    <button
                      id="addToCart"
                      onClick={onAdd(item._id)}
                      className="btn btn-dark mb-2"
                    >
                      Add to your cart
                    </button>
                    <Link
                      to={`/profile/${item.user}`}
                      className="btn btn-dark mt-2"
                    >
                      Seller's profile
                    </Link>
                  </>
                )}
              </Buttons>
            )}
          </span>
        </ItemCard>
      </div>
    </div>
  );
};

Item.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired
};

export default connect(
  null,
  { deleteItem, addItemToCart }
)(Item);
