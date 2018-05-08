import React from "react";
import { Link, withRouter } from "react-router-dom";
import { AuthService } from "../../../services/AuthService";

export const AuthButton = withRouter(
  ({ history }) =>
    AuthService.isAuthenticated ? (
      <span>
        Welcome,{" "}
        <Link to={"/userinfo/" + AuthService.currentUser.id}>
          {AuthService.currentUser.name}
        </Link>!
        <button
          className="signout-btn"
          onClick={() => {
            AuthService.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </span>
    ) : (
      <Link to="/login">Login</Link>
    )
);
