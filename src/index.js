// common components
import React from "react";
import { render } from "react-dom";

// routing components
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// custom extensions
import { PrivateRoute } from "./extensions/PrivateRoute";

// services
import * as firebase from "./services/firebase";
import * as authService from "./services/auth";

// custom views
import AppView from "./views/App/AppView";

import AboutView from "./views/App/views/Statics/AboutView";
import HomeView from "./views/App/views/Statics/HomeView";
import NotFoundView from "./views/App/views/Statics/NotFoundView";

import LoginView from "./views/App/views/Login/LoginView";
import RegisterView from "./views/App/views/Register/RegisterView";
import UserInfoView from "./views/App/views/UserInfo/UserInfoView";
import TrainingView from "./views/App/views/Training/TrainingView";
import MyKeyView from "./views/App/views/MyKey/MyKeyView";

render(
  <Router>
    <AppView>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/about" component={AboutView} />
        <Route path="/login" component={LoginView} />
        <Route path="/training" component={TrainingView} />

        <PrivateRoute path="/userinfo/:uid" component={UserInfoView} />
        <PrivateRoute path="/mykey" component={MyKeyView} />

        <Route component={NotFoundView} />
      </Switch>
    </AppView>
  </Router>,
  document.getElementById("root")
);

export { firebase, authService };
