import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addReview } from "../../actions/reviewActions";

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
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
    const newReview = {
      text: this.state.text,
      id: "5bff486a3b260014f83075b8"
    };
    this.props.addReview(newReview);
    this.setState({ [e.target.name]: e.target.value });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { errors } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <TextAreaFieldGroup
              className="form-control form-control-lg"
              placeholder="Say Something..."
              name="text"
              value={this.state.text}
              onChange={this.onChange}
              error={errors.text}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addReview }
)(ReviewForm);
