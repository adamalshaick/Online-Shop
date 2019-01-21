import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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
      <div className="col-md-4 p-0">
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

            {showActions ? (
              <span>
                {item.user === auth.user.id ? (
                  <button
                    style={{}}
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
