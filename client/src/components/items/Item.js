import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteItem } from "../../actions/itemActions";
import { addItemToCart } from "../../actions/cartActions";
import ReactTimeout from "react-timeout";
import Alert from "../common/Alert";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false
    };
  }
  onDeleteClick(id) {
    this.props.deleteItem(id);
  }

  onAddClick(item) {
    const itemData = {
      user: item.user,
      text: item.text,
      price: item.price,
      title: item.title,
      itemImage: item.itemImage
    };
    this.props.addItemToCart(itemData);
    this.setState({ showAlert: true });
    this.props.setTimeout(() => {
      this.setState({ showAlert: false });
    }, 3000);
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
              style={{ width: "100%", maxHeight: "400px" }}
              className=" d-none d-md-block"
              src={`../../uploads/post_image/${item.itemImage}`}
              alt=""
            />
            <p>{item.title}</p>
            <p style={{ fontSize: "1.5rem" }}>{item.price} $</p>

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
                ) : this.state.showAlert ? (
                  <Alert
                    showAlert={this.state.showAlert}
                    text={item.title + " added to cart"}
                  />
                ) : (
                  <button
                    onClick={this.onAddClick.bind(this, item)}
                    className="btn btn-dark"
                  >
                    Add to your cart
                  </button>
                )}
              </span>
            ) : null}
          </div>
        </div>
        {/* {this.state.showAlert ? (
          <Alert
            showAlert={this.state.showAlert}
            text={item.title + " added to cart"}
          />
        ) : null} */}
      </div>
    );
  }
}

Item.defaultProps = {
  showActions: true
};

Item.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default ReactTimeout(
  connect(
    mapStateToProps,
    { deleteItem, addItemToCart }
  )(Item)
);
