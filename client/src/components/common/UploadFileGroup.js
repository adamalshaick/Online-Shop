import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const UploadFileGroup = ({ error, icon, type, name, onChange, value }) => {
  return (
    <div className="input-group mt-3">
      <div className="input-group-prepend">
        <div className="card text-center">
          <i className={icon} />
          <input
            className={classnames("form-control form-control-lg", {
              "is-invalid": error
            })}
            onChange={onChange}
            type={type}
            name={name}
            value={value}
            style={{ margin: "auto" }}
          />
          {error && <div className="invalid-feedback">{error}</div>}
        </div>
      </div>
    </div>
  );
};

UploadFileGroup.propTypes = {
  error: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

UploadFileGroup.defaultProps = {
  type: "file"
};

export default UploadFileGroup;
