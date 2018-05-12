// common components
import React from "react";
import Zoom from "react-reveal/Zoom";
// routing components
import { Link } from "react-router-dom";
// custom components
import { AuthButton } from "../../views/App/components/AuthButton";

export default class AppView extends React.Component {
  render() {
    return (
      <div className="app-div">
        <Zoom>
          <div className="header-div">
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/register">Register</Link>
            </p>
            <p>
              <Link to="/training">Training</Link>
            </p>
            <p>
              <Link to="/about">About</Link>
            </p>
            <p>
              <AuthButton />
            </p>
          </div>
        </Zoom>

        <div className="container-div">{this.props.children}</div>
        <div className="divide-div" />
        <div className="footer-div">
          <small>
            &copy; Sample created on <b>2018</b> by <b>_ARCHER_</b>
          </small>
        </div>
      </div>
    );
  }
}
