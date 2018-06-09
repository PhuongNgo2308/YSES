// common components
import React from "react";
import { render } from "react-dom";

// services
import * as firebase from "./services/firebase";
import * as firebaseAuth from "./services/firebaseAuth";

// custom views
import NewApp from "./views/App/NewApp";

render(<NewApp />, document.getElementById("root"));

export { firebase, firebaseAuth };
