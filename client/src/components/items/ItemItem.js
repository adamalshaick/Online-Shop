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
    const { item, auth } = this.props;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <Link to="">
              <img
                className="rounded-circle d-none d-md-block"
                src={item.avatar}
                alt=""
              />
            </Link>
            <p className="text-center">{item.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{item.text}</p>
          </div>
          <Link to={`/item/${item._id}`} className="btn btn-info mr-1">
            Comments
          </Link>
        </div>
      </div>
    );
  }
}

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
