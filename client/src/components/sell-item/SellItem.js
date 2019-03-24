import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import InputGroup from "../common/InputGroup";
import { addItem } from "../../actions/itemActions";
import UploadFileGroup from "../common/UploadFileGroup";
import SelectListGroup from "../common/SelectListGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import handleInputErrors from "../common/hoc/handleInputErrors";
import fetchCurrentUser from "../common/hoc/fetchCurrentUser";
import { ShadowCard } from "../common/styles/ShadowCard";

class SellItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      price: "",
      name: "",
      category: "",
      selectedFile: null
    };
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
    newItem.append("name", this.state.name);
    newItem.append("text", this.state.text);
    newItem.append("price", this.state.price);
    newItem.append("category", this.state.category);

    this.props.addItem(newItem, this.props.history);
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.props;

    const options = [
      { label: "* Select category", value: "" },
      { label: "Clothes", value: "Clothes" },
      { label: "Electronics", value: "Electronics" },
      { label: "Shoes", value: "Shoes" }
    ];

    return (
      <div className="mb-3 entry container">
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
            <h1 className="text-center mt-5 mb-5">Sell an item</h1>
            <ShadowCard>
              <div>
                <div className="row">
                  <div className="col-md-6">
                    <form>
                      <InputGroup
                        placeholder="Name"
                        name="name"
                        icon="fas fa-signature"
                        value={this.state.name}
                        onChange={this.onChange}
                        error={errors.name}
                      />
                      <div className="mt-3">
                        <InputGroup
                          placeholder="Price (USD)"
                          name="price"
                          icon="fas fa-dollar-sign"
                          value={this.state.price}
                          onChange={this.onChange}
                          error={errors.price}
                        />
                      </div>
                      <div className="mt-3">
                        <SelectListGroup
                          placeholder="* Category"
                          name="category"
                          value={this.state.category}
                          options={options}
                          error={errors.category}
                          onChange={this.onChange}
                        />
                      </div>
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
                <form className="p-3" onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <TextFieldGroup
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
            </ShadowCard>
          </div>
        </div>
      </div>
    );
  }
}

SellItem.propTypes = {
  addItem: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired
};

export default connect(
  null,
  { addItem }
)(fetchCurrentUser(handleInputErrors(SellItem)));
