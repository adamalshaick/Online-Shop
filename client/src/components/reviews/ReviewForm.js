import React from "react";
import PropTypes from "prop-types";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import NumberInput from "../common/NumberInput";
import { ReviewCard } from "../common/styles/Review";
import { ShadowCard } from "../common/styles/ShadowCard";

export const ReviewForm = ({
  onClickRev,
  errors,
  text,
  rate,
  onSubmit,
  onChange
}) => {
  return (
    <>
      <div className="row">
        <ReviewCard className="col-md-6 col-lg-4">
          <ShadowCard className="card p-0">
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
          </ShadowCard>
        </ReviewCard>
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
