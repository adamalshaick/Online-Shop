import React, { Component } from "react";
import Link from "react-router-dom/Link";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import Navbar from "./Navbar";
import Waypoint from "react-waypoint";

const Styled = styled.div`
  opacity: ${props => (props.flag ? "1" : "0")};
  padding: 5rem;
  transition: all 0.5s;
  perspective: 1000px;
`;

const SecondStyled = styled.img`
  transform: ${props => (props.flag ? "rotateY(-10deg)" : "rotateY(0)")};
  transition: transform 1s;
`;

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowFlag: false,
      dashboardFlag: false,
      itemsFlag: false,
      cartFlag: false
    };
  }

  handleWaypointEnter = flag => {
    this.setState({ flag: true });
  };

  handleWaypointLeave = flag => {
    this.setState({ flag: false });
  };

  render() {
    return (
      <div className="entry">
        <div
          style={{
            backgroundImage: "url('./assets/images/backg.png')",
            backgroundSize: "cover",

            marginTop: "0"
          }}
        >
          <Navbar />

          <div>
            <div
              style={{
                height: "100vh",
                filter: "none"
              }}
              className="container"
            >
              <div className="row mt-5">
                <div style={{ fontSize: "3.5rem" }} className="col-6 mt-5 pt-5">
                  <div className="entry-heading">
                    <strong>Dynamic Online Shop full-Stack application</strong>
                  </div>

                  <div
                    style={{ fontSize: "1.7rem" }}
                    className="text-muted entry-2x"
                  >
                    Built with React, Redux and Node.js
                  </div>
                  <Link to="register" className="btn btn-danger btn-lg mt-5">
                    Sign Up here
                  </Link>

                  <div style={{ fontSize: "1.7rem" }} className=" mt-3">
                    or scroll down to find out more
                  </div>
                </div>

                <div className="col-6 pt-5">
                  <img
                    className="m-2 ml-5 float-right entry-card"
                    style={{ width: "350px" }}
                    src="./assets/icons/credit-card.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">jd</div>
            <Waypoint
              onEnter={this.handleWaypointEnter}
              onLeave={this.handleWaypointLeave}
              bottomOffset="500px"
            />
            <Styled flag={this.state.flag} className="col-md-8">
              <SecondStyled
                flag={this.state.flag}
                style={{
                  width: "100%",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  borderRadius: "1rem"
                }}
                src="./assets/images/online-cart.png"
              />
            </Styled>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
