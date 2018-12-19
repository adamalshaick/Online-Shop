import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import { addItem } from "../../actions/itemActions";

class SellItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      price: "",
      title: "",
      name: "",
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

    newItem.append(
      "myImage",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    newItem.append("text", this.state.text);
    newItem.append("price", this.state.price);
    newItem.append("title", this.state.title);

    this.props.addItem(newItem);
    this.setState({ text: "" }, { price: "" }, { title: "" });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;
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
            </div>
            <div className="col-md-6">
              <div className="card text-center">{/*upload*/}</div>
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
            <button onClick={this.onSubmit} className="btn btn-danger">
              Next
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
