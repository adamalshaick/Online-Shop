import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems } from "../../actions/itemActions";
import ItemFeed from "./ItemFeed";
import Loading from "../common/Loading";

export class Items extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { items, loading } = this.props.item;
    let itemContent;

    if (items === null || loading) {
      itemContent = <Loading />;
    } else {
      itemContent = (
        <div className="feed">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ItemFeed items={items} />;
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
