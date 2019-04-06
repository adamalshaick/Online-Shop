import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  type,
  onChange,
  disabled
}) => {
  return (
    <div>
      <TextField
        style={{ width: "100%" }}
        label={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        multiline
        rows="4"
        margin="normal"
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

TextFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
