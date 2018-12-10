import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ItemItem from "../items/ItemItem";
import { getItem } from "../../actions/itemActions";
import Link from "react-router-dom/Link";
import axios from "axios";
import { setCurrentUser } from "../../actions/authActions";
import authReducer from "../../reducers/authReducer";

class Item extends Component {
  componentDidMount() {
    this.props.getItem(this.props.match.params.id);
  }

  fileChangedHandler = e => {
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  uploadHandler = e => {
    const data = new FormData();
    data.append(
      "myImage",
      this.state.selectedFile,
      this.state.selectedFile.name,
      axios.post("/api/items/upload", data)
    );
  };

  render() {
    const { item, loading } = this.props.item;
    const { auth } = this.props;
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

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {item.user === auth.user.id && item.itemImage === undefined ? (
              <p>
                <input type="file" onChange={this.fileChangedHandler} />
                <button className="btn btn-danger" onClick={this.uploadHandler}>
                  Upload
                </button>
              </p>
            ) : (
              <p />
            )}
            <input type="file" onChange={this.fileChangedHandler} />
            <button className="btn btn-danger" onClick={this.uploadHandler}>
              Upload
            </button>
            <Link to="/items" className="btn btn-light mb-3">
              Back to items
            </Link>
            {itemContent}
          </div>
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  getItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getItem }
)(Item);
