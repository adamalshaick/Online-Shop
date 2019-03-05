import React from "react";
import PropTypes from "prop-types";
import { StyledAlert } from "../common/styles/StyledAlert";

const Alert = ({ showAlert, text }) => {
  return (
    <>
      {showAlert ? (
        <StyledAlert className="text-white p-2 text-center">{text}</StyledAlert>
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
