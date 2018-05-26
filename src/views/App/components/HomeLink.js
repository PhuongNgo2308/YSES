import React from "react";
import { Link, withRouter } from "react-router-dom";

import { AuthService } from "../../../services/AuthService";
import { IconHome } from "../../../views/App/components/Icons";

export const HomeLink = withRouter(
  ({ history }) =>
    AuthService.isAuthenticated ? (
      <p>
        <Link to="/">
          <IconHome />Home
        </Link>
      </p>
    ) : (
      <p>
        <Link to="/">
          <IconHome />Home
        </Link>
      </p>
    )
);
