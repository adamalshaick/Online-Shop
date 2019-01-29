import React, { Component } from "react";
import Link from "react-router-dom/Link";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

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
  float: ${props => (props.left ? "right" : "left")};
  transition: all 0.5s;
  color: black;
`;

const Image = styled.img`
  width: 66%;
  height: 100%;
  float: ${props => (props.left ? "left" : "right")};
`;

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  render() {
    return (
      <div className="landing-page entry">
        <div className="landing-image" />
        <div className="text-center">
          <h3 className="mt-5 mb-5">Online Shop</h3>
          <Button>
            <Link to="/login">
              <Image left src="./assets/images/portfolio-85.jpg" />
              <Text left>Login</Text>
            </Link>
          </Button>
          <Button>
            <Link to="/register">
              <Image src="./assets/images/rsz_buy.jpg" />
              <Text>Sign Up</Text>
            </Link>
          </Button>
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
