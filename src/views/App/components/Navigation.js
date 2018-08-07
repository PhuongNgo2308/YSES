import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../../global/ROUTES";

const Navigation = () => (
  <ul>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign in</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
  </ul>
);

export default Navigation;
