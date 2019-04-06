import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const InputGroup = ({ name, placeholder, value, error, type, onChange }) => {
  return (
    <div>
      <TextField
        style={{ width: "100%" }}
        label={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
      />
      {error ? (
        <div>
          <small style={{ color: "red" }} className="entry">
            {error}
          </small>
        </div>
      ) : null}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
