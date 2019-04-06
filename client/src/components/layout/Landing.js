import React, { Component } from "react";
import Link from "react-router-dom/Link";
import Navbar from "./Navbar";
import { Badge, Border, Text } from "../common/styles/Landing";

export class Landing extends Component {
  render() {
    return (
      <div className="entry">
        <div>
          <Navbar />
          <img
            style={{ width: "100%", filter: "grayscale(100%)" }}
            src="./assets/images/rsz_online-shop-backgorund.jpg"
          />
          <Border>
            <Badge>
              <Text className="text-center">
                <strong>ONLINE SHOP</strong>
                <p style={{ fontSize: "14px", fontWeight: "200" }}>
                  <strong>FULL-STACK ONLINE SHOP APPLICATION</strong>
                </p>
              </Text>
            </Badge>
          </Border>
          <div className="text-center mt-5">
            <Link to="/register" className="btn btn-lg btn-outline-dark mt-5">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
