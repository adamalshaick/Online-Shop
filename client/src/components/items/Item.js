import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteItem } from "../../actions/itemActions";
import { addItemToCart } from "../../actions/cartActions";
import { Link } from "react-router-dom";
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
  ${ItemCard}:hover & {
    opacity: 0.5;
    cursor: pointer;
    transition: opacity 0.25s;
  }
`;

const Buttons = styled.div`
  display: none;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${ItemCard}:hover & {
    display: block;
  }
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
                  <Alert
                    className="entry"
                    showAlert={this.state.showAlert}
                    text={item.title + " added to cart"}
                  />
                ) : (
                  <Buttons>
                    <button
                      onClick={this.onAddClick.bind(this, item)}
                      className="btn btn-dark mb-2"
                    >
                      Add to your cart
                    </button>
                    <Link
                      to="/jd"
                      onClick={this.onAddClick.bind(this, item)}
                      className="btn btn-dark mt-2"
                    >
                      Seller's profile
                    </Link>
                  </Buttons>
                )}
              </span>
            ) : null}
          </ItemCard>
        </div>
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
