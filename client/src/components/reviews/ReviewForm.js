// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

// import { addReview } from "../../actions/reviewActions";
// import styled from "styled-components";

// const Form = styled.form``;

// class ReviewForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: "",
//       review: "",
//       errors: {}
//     };
//   }
//   componentWillReceiveProps(newProps) {
//     if (newProps.errors) {
//       this.setState({ errors: newProps.errors });
//     }
//   }

//   onSubmit = e => {
//     e.preventDefault();

//     const { user } = this.props.auth;
//     const newReview = {
//       text: this.state.text,
//       id: "5bff486a3b260014f83075b8"
//     };
//     this.props.addReview(newReview);
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   onChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   render() {
//     const { errors } = this.state;
//     return (
//       <>
//         <ReviewWrapper />

//         <button onHideClick={this.props.onHideClick} className="btn btn-danger">
//           DELETE
//         </button>
//       </>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

// export default connect(
//   mapStateToProps,
//   { addReview }
// )(ReviewForm);

import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";

const ReviewWrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
  filter: brightness(10%);
`;

const ReviewGroup = ({
  onClickRev,
  error,
  placeholder,
  name,
  value,
  onChange
}) => {
  return (
    // <>
    //   <ReviewWrapper />
    //   <div className="row">
    //     <div
    //       style={{
    //         position: "fixed",
    //         top: "50%",
    //         left: "50%",
    //         transform: "translate(-50%, -50%)"
    //       }}
    //       className="col-md-3"
    //     >
    //       <div style={{}} className="card">
    //         <div className="card-header text-right">
    //           <button className="btn btn-danger">
    //             <i className="fas fa-times fa-2x" />
    //           </button>
    //         </div>
    //         <div className="card-body">
    //           <form onSubmit={this.onSubmit}>
    //             <div className="form-group">
    //               <TextAreaFieldGroup
    //               // className="form-control form-control-lg"
    //               // placeholder="Say Something..."
    //               // name="text"
    //               // value={this.state.text}
    //               // onChange={this.onChange}
    //               />
    //             </div>
    //             <button type="submit" className="btn btn-primary">
    //               Submit
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <ReviewWrapper />
      <div className="row">
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
          className="col-md-3"
        >
          <div style={{}} className="card">
            <div className="card-header text-right">
              <span
                style={{ fontSize: "1.3rem", fontWeight: "bold" }}
                className="float-left"
              >
                Write a review
              </span>
              <button className="btn btn-danger">
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <textarea
                    style={{ height: "200px" }}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": error
                    })}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                  />
                  {error && <div className="invalid-feedback">{error}</div>}
                  {/* // className="form-control form-control-lg" //
                  placeholder="Say Something..." // name="text" // value=
                  {this.state.text}
                  // onChange={this.onChange}
                  /> */}
                </div>
                <button type="submit" className="btn btn-dark float-right">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// InputGroup.propTypes = {
//   name: PropTypes.string.isRequired,
//   placeholder: PropTypes.string,
//   value: PropTypes.string.isRequired,
//   icon: PropTypes.string,
//   error: PropTypes.string,
//   type: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired
// };

// InputGroup.defaultProps = {
//   type: "text"
// };

export default ReviewGroup;
