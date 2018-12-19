import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

import { addItem } from "../../actions/itemActions";

class ItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      avatar: "",
      defaultPhoto: false,
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
      name: user.name,
      avatar: this.state.itemImage,
      itemImage: this.state.itemImage
    };

    this.props.addItem(newItem);
    this.setState({ text: "" });
    this.setState({ avatar: "" });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="mb-3">
        {/* <div className="card card-info">
          <form>
            <ItemGroup placeholder="Add description" />
          </form>
        </div>
        <div className="card card-info">
          <div className="card-header bg-info text-white">
            Add an item for sale
          </div>
          <form onSubmit={this.onSubmit}>
            <input type="file" />

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
        </div> */}
      </div>
    );
  }
}

ItemForm.propTypes = {
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
)(ItemForm);
