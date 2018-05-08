import React from "react";
import { Link } from "react-router-dom";
import AnimLayout from "/src/views/App/AnimLayout";

export default class Home extends React.Component {
  render() {
    return (
      <AnimLayout>
        <div className="home-div">
          <h2>Welcome to YSES - Your Secrets Encryption Service</h2>
          <p>
            <b>What does this app do?</b>
            <br />
            <span>
              Store your encrypted infomations with your own secret key phase.
            </span>
          </p>

          <p>
            <b>
              <Link to="/register">Register</Link> to getting started.
            </b>
          </p>
        </div>
      </AnimLayout>
    );
  }
}
