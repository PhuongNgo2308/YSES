// common components
import React from "react";

// routing components
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

// custom views
import AboutView from "../../views/App/views/Statics/AboutView";
import HomeView from "../../views/App/views/Statics/HomeView";
import NotFoundView from "../../views/App/views/Statics/NotFoundView";

import SignInView from "../../views/App/views/SignIn/SignInView";
import SignUpView from "../../views/App/views/SignUp/SignUpView";
import UserInfoView from "../../views/App/views/UserInfo/UserInfoView";

import Navigation from "../../views/App/components/Navigation";
import * as ROUTES from "../../global/ROUTES";

const NewApp = () => (
  <Router>
    <div className="div-app">
      <Zoom>
        <div className="div-header">
          <Navigation />
        </div>
      </Zoom>

      <Fade>
        <div id="div-container" className="div-container">
          <Switch>
            <Route exact path={ROUTES.LANDING} component={HomeView} />
            <Route exact path={ROUTES.SIGN_IN} component={SignInView} />
            <Route exact path={ROUTES.SIGN_UP} component={SignUpView} />
            <Route exact path={ROUTES.HOME} component={HomeView} />
            <Route exact path={ROUTES.ACCOUNT} component={UserInfoView} />
            <Route exact path={ROUTES.ABOUT} component={AboutView} />
            <Route exact path={ROUTES.FORGET_PWD} component={HomeView} />

            <Route component={NotFoundView} />
          </Switch>
        </div>

        <div className="div-footer">
          {" "}
          <small>
            &copy; Sample created on <b>2018</b> by <b>_ARCHER_</b>
          </small>
        </div>
      </Fade>
    </div>
  </Router>
);

export default NewApp;
