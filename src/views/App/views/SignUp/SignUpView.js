import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";

// auth service
import * as firebaseAuth from "../../../../services/firebaseAuth";

// custom constants
import * as routes from "../../../../constants/routes";
import { INITIAL_STATE } from "../../../../views/App/views/SignUp/initialState";
import ValidationType from "../../../../extensions/ValidationType";
import { byPropKey } from "../../../../extensions/handling";

const SignUpView = () => (
  <div className="div-signup">
    <h2>Sign Up</h2>
    <SignUpForm />
  </div>
);

const SignUpLink = () => (
  <p>
    {" "}
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = event => {
    event.preventDefault();

    const { username, email, password1 } = this.state;

    firebaseAuth
      .signIn(email, password1)
      .then(authUser => {
        debugger;
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
  };

  render() {
    return (
      <div className="div-signupform">
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            Username*
            <Input
              value={this.state.username}
              autoFocus
              placeholder="Your username"
              name="username"
              validations={[ValidationType.REQUIRED]}
              onChange={event =>
                this.setState(byPropKey("username", event.target.value))
              }
            />
          </label>

          <label>
            Email*
            <Input
              value={this.state.email}
              placeholder="Your email address"
              name="email"
              validations={[ValidationType.REQUIRED, ValidationType.EMAIL]}
              onChange={event =>
                this.setState(byPropKey("email", event.target.value))
              }
            />
          </label>

          <label>
            Password*
            <Input
              placeholder="Your password"
              type="password"
              name="password1"
              minLength="8"
              validations={[ValidationType.REQUIRED, ValidationType.GT]}
              value={this.state.password1}
              onChange={event =>
                this.setState(byPropKey("password1", event.target.value))
              }
            />
          </label>

          <label>
            Confirm Password*
            <Input
              placeholder="Confirm your password"
              type="password"
              name="password2"
              minLength="8"
              validations={[
                ValidationType.REQUIRED,
                ValidationType.GT,
                ValidationType.MAPPED
              ]}
              refvalue={this.state.password1}
              reffieldname="the previous password"
              value={this.state.password2}
              onChange={event =>
                this.setState(byPropKey("password2", event.target.value))
              }
            />
          </label>

          <div>
            <div className="wrap">
              <Button className="button clicker fast">Submit</Button>
              <div className="circle angled second" />
            </div>

            <Link className="back" to={routes.HOME}>
              Back
            </Link>
          </div>

          {this.state.error && (
            <p className="p-error">{this.state.error.message}</p>
          )}
        </Form>
      </div>
    );
  }
}

export default SignUpView;
export { SignUpForm, SignUpLink };
