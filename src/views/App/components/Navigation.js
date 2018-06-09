import React from "react";
import { Link } from "react-router-dom";

import * as routes from "../../../constants/routes";

const Navigation = () => (
  <ul>
    <li>
      <Link to={routes.HOME}>Home</Link>
    </li>

    <li>
      <Link to={routes.SIGN_IN}>Sign in</Link>
    </li>
    <li>
      <Link to={routes.HOME}>Home</Link>
    </li>
    <li>
      <Link to={routes.ACCOUNT}>Account</Link>
    </li>
  </ul>
);

export default Navigation;
