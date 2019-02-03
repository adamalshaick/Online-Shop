import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import styled from "styled-components";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import NumberInput from "../common/NumberInput";

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

const ReviewForm = ({ onClickRev, errors, text, rate, onSubmit, onChange }) => {
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
                    <NumberInput
                      name="rate"
                      value={rate}
                      error={errors.rate}
                      type="text"
                      onChange={onChange}
                    />
                    /5
                  </div>
                </div>
                <TextAreaFieldGroup
                  name="text"
                  value={text}
                  error={errors.text}
                  type="text"
                  onChange={onChange}
                />
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

ReviewForm.propTypes = {
  onClickRev: PropTypes.func.isRequired,
  errors: PropTypes.object,
  text: PropTypes.string.isRequired,
  rate: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ReviewForm;
