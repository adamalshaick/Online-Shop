import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deleteItem } from "../../actions/itemActions";
import { addItemToCard } from "../../actions/itemActions";

class ItemItem extends Component {
  onDeleteClick(id) {
    this.props.deleteItem(id);
  }

  onAddClick(item) {
    this.props.addItemToCard(item);
  }

  render() {
    const { item, auth, showActions } = this.props;

    return (
      <div className="col-md-4">
        <div style={{ height: "300px" }} className="card card-body mb-3 ">
          <div className="row">
            <div className="">
              <img
                style={{ maxWidth: "150px", maxHeight: "150px" }}
                className=" d-none d-md-block"
                src={`../../uploads/post_image/${item.itemImage}`}
                alt=""
              />

              <p>{item.price} $</p>
            </div>
            <div className="">
              <p className="lead">{item.text}</p>
              <p>{item.category}</p>
            </div>
            {showActions ? (
              <span>
                {item.user === auth.user.id ? (
                  <button
                    onClick={this.onDeleteClick.bind(this, item._id)}
                    type="button"
                    className="btn btn-danger mr-1"
                  >
                    <i className="fas fa-times" />
                  </button>
                ) : (
                  <button
                    onClick={this.onAddClick.bind(this, item)}
                    className="btn btn-dark"
                  >
                    Add to your card
                  </button>
                )}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

ItemItem.defaultProps = {
  showActions: true
};

ItemItem.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  addItemToCard: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteItem, addItemToCard }
)(ItemItem);
