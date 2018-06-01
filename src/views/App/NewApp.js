// common components
import React from "react";

// routing components
import { BrowserRouter as Router, Route } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

// custom views
import AboutView from "../../views/App/views/Statics/AboutView";
import HomeView from "../../views/App/views/Statics/HomeView";
import NotFoundView from "../../views/App/views/Statics/NotFoundView";

import SignInView from "../../views/App/views/Login/LoginView";
import RegisterView from "../../views/App/views/Register/RegisterView";
import UserInfoView from "../../views/App/views/UserInfo/UserInfoView";

import Navigation from "../../views/App/components/Navigation";
import * as routes from "../../constants/routes";

const NewApp = () => (
  <Router>
    <div className="div-app">
      <Zoom>
        <Navigation />
      </Zoom>

      <hr />

      <Fade>
        <Route exact path={routes.LANDING} component={HomeView} />
        <Route exact path={routes.SIGN_UP} component={RegisterView} />
        <Route exact path={routes.SIGN_IN} component={SignInView} />
        <Route exact path={routes.HOME} component={HomeView} />
        <Route exact path={routes.ACCOUNT} component={UserInfoView} />
        <Route exact path={routes.ABOUT} component={AboutView} />
        <Route exact path={routes.PASSWORD_FORGET} component={HomeView} />

        <Route component={NotFoundView} />
      </Fade>
    </div>
  </Router>
);
export default NewApp;
