import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems } from "../../actions/itemActions";
import { getItemsFromCart } from "../../actions/cartActions";
import { getCurrentProfile } from "../../actions/profileActions";
import ItemFeed from "./ItemFeed";
import Loading from "../common/Loading";
import SelectListGroup from "../common/SelectListGroup";
import Navbar from "../layout/Navbar";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "",
      selectedCategory: ""
    };
  }

  componentDidMount() {
    this.props.getItems();
    this.props.getItemsFromCart();
    this.props.getCurrentProfile();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { items } = this.props.item;
    const { cart } = this.props.cart;

    // const { profile, loading } = this.props.profile;

    let itemContent;
    let itemsArray;

    const sortOptions = [
      { label: "* Sort by", value: "" },
      { label: "Price ascending", value: "ascending" },
      { label: "Price descending", value: "descending" }
    ];

    const selectOptions = [
      { label: "* Select category", value: "" },
      { label: "Clothes", value: "Clothes" },
      { label: "Electronics", value: "Electronics" },
      { label: "Shoes", value: "Shoes" }
    ];

    if (
      items === null ||
      cart === null ||
      this.props.profile === null ||
      this.props.cart.loading
    ) {
      itemContent = <Loading />;
    } else {
      if (Object.keys(this.props.profile).length > 0) {
        if (this.state.selectedCategory !== "") {
          itemsArray = items.filter(
            item => item.category === this.state.selectedCategory
          );
        } else {
          itemsArray = items;
        }

        if (this.state.sortBy !== "") {
          if (this.state.sortBy === "ascending") {
            itemsArray.sort(function(a, b) {
              return a.price - b.price;
            });
          }

          if (this.state.sortBy === "descending") {
            itemsArray.sort(function(a, b) {
              return b.price - a.price;
            });
          }
        }
        itemContent = (
          <>
            <Navbar />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h1
                    style={{ fontSize: "1.7rem" }}
                    className="m-5 text-center"
                  >
                    Items for sale
                  </h1>
                  <div className="row">
                    <div className="col-md-6">
                      <form>
                        <SelectListGroup
                          placeholder="* Category"
                          name="selectedCategory"
                          value={this.state.selectedCategory}
                          options={selectOptions}
                          onChange={this.onChange}
                        />
                      </form>
                    </div>
                    <div className="col-md-6">
                      <form>
                        <SelectListGroup
                          placeholder="* Sort by..."
                          name="sortBy"
                          value={this.state.sortBy}
                          options={sortOptions}
                          onChange={this.onChange}
                        />
                      </form>
                    </div>
                  </div>
                  <ItemFeed items={itemsArray} cart={cart} />
                </div>
              </div>
            </div>
          </>
        );
      } else {
        this.props.history.push("/create-profile");
      }
    }
    return <>{itemContent}</>;
  }
}

Items.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  getItemsFromCart: PropTypes.func.isRequired,
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item,
  cart: state.cart,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getItems, getItemsFromCart, getCurrentProfile }
)(Items);
