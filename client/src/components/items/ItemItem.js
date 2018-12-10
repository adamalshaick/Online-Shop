import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deleteItem } from "../../actions/itemActions";

class ItemItem extends Component {
  onDeleteClick(id) {
    this.props.deleteItem(id);
  }

  render() {
    const { item, auth, showActions } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <img
              style={{ width: "150px", height: "150px" }}
              className=" d-none d-md-block"
              src={`./../uploads/post_image/${item.itemImage}`}
              alt=""
            />

            <p>{item.price}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{item.text}</p>
          </div>
          {showActions ? (
            <span>
              <Link to={`/item/${item._id}`} className="btn btn-info mr-1">
                Items
              </Link>
              {item.user === auth.user.id ? (
                <button type="button" className="btn btn-danger mr-1">
                  <i className="fas fa-times" />
                </button>
              ) : null}
            </span>
          ) : null}
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
  item: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteItem }
)(ItemItem);
