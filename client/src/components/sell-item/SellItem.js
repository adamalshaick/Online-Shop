import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import { addItem } from "../../actions/itemActions";
import UploadFileGroup from "../common/UploadFileGroup";
import SelectListGroup from "../common/SelectListGroup";

class SellItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      price: "",
      title: "",
      name: "",
      category: "",
      selectedFile: null,
      errors: {}
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }

  fileSelectedHandler = e => {
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { user } = this.props.auth;

    const newItem = new FormData();

    if (this.state.selectedFile) {
      newItem.append(
        "myImage",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    }

    newItem.append("text", this.state.text);
    newItem.append("price", this.state.price);
    newItem.append("title", this.state.title);
    newItem.append("category", this.state.category);

    this.props.addItem(newItem);
    this.setState({ text: "" });
    this.setState({ price: "" });
    this.setState({ title: "" });
    this.setState({ category: "" });
    this.setState({ selectedFile: null });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;

    const options = [
      { label: "* Select category", value: "" },
      { label: "Clothes", value: "Clothes" },
      { label: "Electronics", value: "Electronics" },
      { label: "Shoes", value: "Shoes" }
    ];

    return (
      <div className="mb-3">
        <h1 className="text-center mt-5 mb-5">Sell an item</h1>
        <div className="card card-info">
          <div className="row">
            <div className="col-md-6">
              <form>
                <span>Enter a name</span>
                <InputGroup
                  placeholder="Add a name of your item"
                  placeholder="Name"
                  name="title"
                  icon="fas fa-signature"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                />
              </form>

              <form>
                <span>Enter a price</span>
                <InputGroup
                  placeholder="Add price"
                  placeholder="Price (USD)"
                  name="price"
                  icon="fas fa-dollar-sign"
                  value={this.state.price}
                  onChange={this.onChange}
                  error={errors.price}
                />
              </form>

              <form>
                <SelectListGroup
                  placeholder="* Category"
                  name="category"
                  value={this.state.category}
                  options={options}
                  error={errors.category}
                  onChange={this.onChange}
                />
              </form>
            </div>
            <div className="col-md-6">
              <UploadFileGroup
                error={errors.file}
                icon="far fa-image fa-10x"
                type="file"
                name="file"
                onChange={this.fileSelectedHandler}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6" />
          </div>
        </div>
        <div className="card card-info">
          <div className="card-header">
            <span>Add some information about your product</span>
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
            <button
              onClick={this.onSubmit}
              className="btn btn-danger float-right mr-5"
            >
              Upload
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
