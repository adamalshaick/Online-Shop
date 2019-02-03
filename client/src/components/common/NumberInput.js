import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const NumberInput = ({ name, value, error, type, onChange }) => {
  return (
    <>
      <input
        name={name}
        error={error}
        value={value}
        type={type}
        onChange={onChange}
        style={{ width: "30px", fontSize: "1.2rem" }}
        className={classnames("form-control form-control-sm ml-3", {
          "is-invalid": error
        })}
      />
      {/* {error && <div className="invalid-feedback">{error}</div>} */}
    </>
  );
};

NumberInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

NumberInput.defaultProps = {
  type: "text"
};

export default NumberInput;
