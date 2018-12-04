import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import { addItem } from "../../actions/itemActions";
import axios from "axios";

class SellItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      price: "",
      selectedFile: null,
      errors: {}
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const { user } = this.props.auth;

    const newItem = {
      text: this.state.text,
      price: this.state.price,
      name: user.name,
      avatar: user.avatar,
      selectedFile: this.state.selectedFile
    };

    this.props.addItem(newItem);
    this.setState({ text: "" });
    this.setState({ price: "" });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
    const { errors } = this.state;
    return (
      <div className="mb-3">
        <input type="file" onChange={this.fileChangedHandler} />
        <button className="btn btn-danger" onClick={this.uploadHandler}>
          Upload
        </button>

        <div className="card card-info">
          <form>
            <InputGroup
              placeholder="Add price"
              placeholder="Price"
              name="price"
              icon="fab fa-dollar-sign"
              value={this.state.price}
              onChange={this.onChange}
              error={errors.price}
            />
          </form>
        </div>
        <div className="card card-info">
          <div className="card-header bg-info text-white">
            Add an item for sale
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <TextAreaFieldGroup
                className="form-control form-control-lg"
                placeholder="Add description"
                name="text"
                value={this.state.text}
                onChange={this.onChange}
                error={errors.text}
              />
            </div>
            <button type="submit" className="btn btn-info">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

SellItem.propTypes = {
  addItem: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addItem }
)(SellItem);
