import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteItem } from "../../actions/itemActions";
import { addItemToCart } from "../../actions/cartActions";
import ReactTimeout from "react-timeout";
import Alert from "../common/Alert";
import styled from "styled-components";

const ItemCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 2rem;
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
`;

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      imageLoad: false
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

  imageLoaded = () => {
    this.setState({ imageLoad: true });
  };

  getStyle() {
    return {
      visibility: this.state.imageLoad ? "visible" : "hidden"
    };
  }

  render() {
    const { item, auth, showActions } = this.props;

    return (
      <>
        <div className="col-md-6 col-lg-4 p-0 entry-2x">
          <div>
            <ItemCard className="text-center m-3">
              <Image
                style={this.getStyle()}
                src={`../../uploads/post_image/${item.itemImage}`}
                alt=""
                onLoad={this.imageLoaded}
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
                    <>
                      <div
                        style={{
                          width: "200px",
                          height: "38px",
                          visibility: "hidden"
                        }}
                      />
                      <Alert
                        className="entry"
                        style={{}}
                        showAlert={this.state.showAlert}
                        text={item.title + " added to cart"}
                      />
                    </>
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
            </ItemCard>
          </div>
          {/* {this.state.showAlert ? (
          <Alert
            showAlert={this.state.showAlert}
            text={item.title + " added to cart"}
          />
        ) : null} */}
        </div>
      </>
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
