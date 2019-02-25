import React, { Component } from "react";
import Link from "react-router-dom/Link";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import Navbar from "./Navbar";

const Button = styled.figure`
  text-align: center;
  margin: 0.5rem;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  background-color: whitesmoke;
  filter: brightness(100%);
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  &:hover {
    filter: brightness(50%);
  }
  transition: filter 0.5s;
  @media (min-width: 1000px) {
    & {
      width: 70%;
    }
  }
`;

const Text = styled.figcaption`
  text-align: center;
  font-size: 1.1rem;
  width: 34%;
  margin-top: 19%;
  float: right;
  transition: all 0.5s;
  color: black;
`;

const Image = styled.img`
  width: 66%;
  height: 100%;
  float: left;
`;

class WelcomePage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="landing-page entry container">
          <div className="text-center">
            <h3 className="mt-5 mb-4">Welcome {this.props.auth.user.name}</h3>
            <Button>
              <Link to="/dashboard">
                <Image left src="./assets/images/rsz_dashboard.jpg" />
                <Text left> Dashboard</Text>
              </Link>
            </Button>
          </div>
          <div className="row mt-5">
            <div className="col-md-2" />
            <div className="col-md-8">
              <Link
                to="/items"
                style={{ border: "lightgrey solid 1px" }}
                className="col-lg-12 btn btn-light btn-lg"
              >
                Browse items for sale
              </Link>
              <Link
                to="/sell-item"
                style={{ border: "lightgrey solid 1px" }}
                className="col-lg-12 btn btn-light mt-4 btn-lg"
              >
                Sell Your item
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

WelcomePage.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(WelcomePage);
