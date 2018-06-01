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
import NewApp from "./views/App/NewApp";

render(<NewApp />, document.getElementById("root"));

export { firebase, authService };
