// common components
import React from "react";
import Zoom from "react-reveal/Zoom";
// routing components
import { Link } from "react-router-dom";
// custom components
import { RegisterLink } from "../../views/App/components/RegisterLink";
import { AuthLink } from "../../views/App/components/AuthLink";
import { AboutLink } from "../../views/App/components/AboutLink";
import { HomeLink } from "../../views/App/components/HomeLink";
import { ListSecretsLink } from "../../views/App/components/ListSecretsLink";
import { AddSecretLink } from "../../views/App/components/AddSecretLink";
import { MyKeyLink } from "../../views/App/components/MyKeyLink";

export default class AppView extends React.Component {
  render() {
    return (
      <div className="app-div">
        <Zoom>
          <div className="header-div">
            <HomeLink />
            <RegisterLink />
            <AboutLink />
            <ListSecretsLink />
            <AddSecretLink />
            <MyKeyLink />
            <AuthLink />
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
