import React from "react";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

import * as routes from "../../../constants/routes";

const Navigation = () => (
  <Zoom>
    <div>
      <ul>
        <li>
          <Link to={routes.SIGN_IN}>Sign in</Link>
        </li>
        <li>
          <Link to={routes.LANDING}>Landing</Link>
        </li>
        <li>
          <Link to={routes.HOME}>Home</Link>
        </li>
        <li>
          <Link to={routes.ACCOUNT}>Account</Link>
        </li>
      </ul>
    </div>
  </Zoom>
);

export default Navigation;
