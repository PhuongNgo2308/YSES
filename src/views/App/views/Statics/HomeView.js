import React from "react";
import { Link } from "react-router-dom";
import AnimLayout from "../../../../views/App/AnimLayout";

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
            <img
              className="img-app-flow"
              src="https://lh3.google.com/u/0/d/1ToRfaUf8atPUOp3vaeNcmq2jxdxUaueg=w1827-h940-iv1"
              alt="loading.."
            />
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
