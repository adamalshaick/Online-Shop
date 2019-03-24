import React, { Component } from "react";
import PropTypes from "prop-types";
import ItemFeed from "./ItemFeed";
import SelectListGroup from "../common/SelectListGroup";
import fetchItems from "../common/hoc/fetchItems";
import fetchCurrentUser from "../common/hoc/fetchCurrentUser";
import { SecondaryHeader } from "../common/styles/Header";
import {
  sortOptions,
  selectOptions,
  sort,
  select
} from "../../utils/browseItems";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortBy: "",
      selectedCategory: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { items } = this.props.item;
    const itemsArray = select(this.state.selectedCategory, items);
    sort(this.state.sortBy, itemsArray);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <SecondaryHeader className="m-5 text-center">
              Items for sale
            </SecondaryHeader>
            <div className="row">
              <div className="col-md-6">
                <SelectListGroup
                  placeholder="* Category"
                  name="selectedCategory"
                  value={this.state.selectedCategory}
                  options={selectOptions}
                  onChange={this.onChange}
                />
              </div>
              <div className="col-md-6">
                <SelectListGroup
                  placeholder="* Sort by..."
                  name="sortBy"
                  value={this.state.sortBy}
                  options={sortOptions}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <ItemFeed
              items={itemsArray}
              currentUser={this.props.user.currentUser}
            />
          </div>
        </div>
      </div>
    );
  }
}

Items.propTypes = {
  item: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired
};

export default fetchCurrentUser(fetchItems(Items));
