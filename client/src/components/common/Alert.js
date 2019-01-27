import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Alert = ({ showAlert, text }) => {
  return (
    <>
      {showAlert ? (
        <div
          className="text-white p-2 text-center"
          style={{
            position: "relative",
            left: "50%",
            width: "200px",
            height: "40px",
            backgroundColor: "#2DCC70",
            borderRadius: "10px",
            transform: "translateX(-50%)"
          }}
        >
          {text}
        </div>
      ) : null}
    </>
  );
};

Alert.propTypes = {
  showAlert: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

Alert.defaultProps = {
  showAlert: false
};

export default Alert;
