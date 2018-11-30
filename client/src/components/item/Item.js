import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ItemItem from "../items/ItemItem";
import { getItem } from "../../actions/itemActions";
import Link from "react-router-dom/Link";

class Item extends Component {
  componentDidMount() {
    this.props.getItem(this.props.match.params.id);
  }

  render() {
    const { item, loading } = this.props.item;
    let itemContent;

    if (item === null || loading || Object.keys(item).length === 0) {
      itemContent = <p>Loading ...</p>;
    } else {
      itemContent = (
        <div>
          <ItemItem item={item} />
        </div>
      );
    }

    return <>{itemContent}</>;
  }
}

Item.propTypes = {
  getItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItem }
)(Item);
