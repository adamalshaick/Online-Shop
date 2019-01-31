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
  textState,
  rateState,
  onSubmit,
  onChange
}) => {
  return (
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
          <div className="card">
            <div className="card-header text-right">
              <span
                style={{ fontSize: "1.3rem", fontWeight: "bold" }}
                className="float-left"
              >
                Write a review
              </span>
              <button onClick={onClickRev} className="btn btn-danger">
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <div
                    className="float-right mb-3"
                    style={{
                      display: "flex",
                      fontSize: "1.2rem",
                      fontWeight: "bold"
                    }}
                  >
                    Add a Rating:
                    <input
                      name="rate"
                      value={rateState}
                      onChange={onChange}
                      style={{ width: "30px", fontSize: "1.2rem" }}
                      className={classnames(
                        "form-control form-control-sm ml-3",
                        {
                          "is-invalid": error
                        }
                      )}
                    />
                    /5
                  </div>
                  <textarea
                    style={{ height: "200px" }}
                    className={classnames("form-control form-control-lg", {
                      "is-invalid": error
                    })}
                    placeholder="Write a review"
                    name="text"
                    value={textState}
                    onChange={onChange}
                  />
                  {error && <div className="invalid-feedback">{error}</div>}
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
