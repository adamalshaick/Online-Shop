import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import { addItem } from "../../actions/itemActions";
import { getCurrentProfile } from "../../actions/profileActions";
import UploadFileGroup from "../common/UploadFileGroup";
import SelectListGroup from "../common/SelectListGroup";
import Navbar from "../layout/Navbar";

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

  componentDidMount() {
    this.props.getCurrentProfile();
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

    this.props.addItem(newItem, this.props.history);
    this.setState({
      text: "",
      price: "",
      title: "",
      category: "",
      selectedFile: null
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors, profile } = this.state;

    const options = [
      { label: "* Select category", value: "" },
      { label: "Clothes", value: "Clothes" },
      { label: "Electronics", value: "Electronics" },
      { label: "Shoes", value: "Shoes" }
    ];

    return (
      <>
        <Navbar />
        <div className="mb-3 entry container">
          <h1 className="text-center mt-5 mb-5">Sell an item</h1>
          <div
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              padding: "2rem"
            }}
          >
            <div>
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
                    icon="fas fa-file-upload fa-8x"
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
            <div>
              <div>
                <span>Add some information about your product</span>
              </div>
              <form className="p-3" onSubmit={this.onSubmit}>
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
        </div>
      </>
    );
  }
}

SellItem.propTypes = {
  addItem: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  getCurrentProfile: PropTypes.func.isRequired,
  auth: state.auth,
  errors: state.errors,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { addItem, getCurrentProfile }
)(SellItem);
