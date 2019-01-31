import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const UploadFileGroup = ({ error, icon, type, name, onChange, value }) => {
  return (
    <div className="input-group mt-3">
      <div className="input-group-prepend">
        <div className=" text-center">
          <i className={`${icon} mb-4 ml-3 mt-3`} />
          <input
            className={classnames("form-control", {
              "is-invalid": error
            })}
            onChange={onChange}
            type={type}
            name={name}
            value={value}
            style={{ marginLeft: "1rem" }}
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
