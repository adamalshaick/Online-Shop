import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems } from "../../actions/itemActions";
import ItemFeed from "./ItemFeed";
import Loading from "../common/Loading";
import SelectListGroup from "../common/SelectListGroup";

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
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { items, loading } = this.props.item;
    let itemContent;

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

    if (items === null || loading) {
      itemContent = <Loading />;
    } else {
      const arr = items.filter(
        item => item.category === this.state.selectedCategory
      );

      if (this.state.sortBy !== "") {
        arr.sort(function(a, b) {
          return a.price - b.price;
        });
      }
      itemContent = (
        <div className="feed">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 style={{ fontSize: "1.7rem" }} className="m-5 text-center">
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

                <ItemFeed items={arr} />
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <>{itemContent}</>;
  }
}

Items.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems }
)(Items);
