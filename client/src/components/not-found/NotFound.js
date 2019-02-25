import React from "react";
import Navbar from "../layout/Navbar";

export default () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="display-4">Page Not Found</h1>
        <p>Sorry, this page does not exist</p>
      </div>
    </>
  );
};
