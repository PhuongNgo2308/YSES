import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../../global/ROUTES";

const Navigation = () => (
  <div id="div-nav">
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign in</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>About</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
