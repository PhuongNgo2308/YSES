import React from "react";
import { Link, withRouter } from "react-router-dom";

import { AuthService } from "../../../services/AuthService";
import { IconInfo } from "../../../views/App/components/Icons";

export const AboutLink = withRouter(
  ({ history }) =>
    AuthService.isAuthenticated ? (
      ""
    ) : (
      <p>
        <Link to="/about">
          <IconInfo />
          About
        </Link>
      </p>
    )
);
