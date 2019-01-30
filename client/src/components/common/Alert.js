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
            width: "200px",
            height: "40px",
            backgroundColor: "#2DCC70",
            borderRadius: "10px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          {text}
        </div>
      ) : (
        <div style={{ width: "200px", height: "40px", visibility: "hidden" }} />
      )}
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
