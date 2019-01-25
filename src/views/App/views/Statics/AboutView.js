import React, { Component } from "react";
import AnimLayout from "../../../../views/App/AnimLayout";
import { Link, withRouter } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";

// auth service
import * as firebaseAuth from "../../../../services/firebaseAuth";

// custom functions
import { ROUTES } from "../../../../global/ROUTES";
import { byPropKey } from "../../../../extensions/handling";
import ValidationType from "../../../../extensions/ValidationType";

const INITIAL_STATE = {
  email: "",
  password: "",
  enckey: "",
  error: null,
  user: undefined
};

class GetDataForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  handleSubmit = event => {
    event.preventDefault();

    const { email, password, enckey } = this.state;
    const { history } = this.props;

    firebaseAuth
      .signIn(email, password)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE, user: authUser }));

        // get data based on enc key
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
  };

  fetchData = event => {};

  updateKey = event => {};

  logout = event => {
    firebaseAuth.signOut();
    this.setState(INITIAL_STATE);
  };

  render() {
    const isLoggedIn = this.state.user !== undefined;

    return (
      <div className="div-getdataform">
        <Form onSubmit={this.handleSubmit}>
          <div>
            {isLoggedIn ? (
              <div>
                <span>
                  Welcome, {this.state.user.email}
                  <button
                    type="button"
                    className="button"
                    onClick={this.logout}
                  >
                    Log out
                  </button>
                </span>

                <div id="div-actions">
                  <label>
                    <Input
                      placeholder="Your encryption key"
                      name="enckey"
                      minLength="5"
                      // validations={[ValidationType.REQUIRED, ValidationType.GT]}
                      value={this.state.enckey}
                      onChange={event =>
                        this.setState(byPropKey("enckey", event.target.value))
                      }
                    />
                  </label>

                  <button
                    type="button"
                    className="button"
                    onClick={this.fetchData}
                  >
                    Fetch Data
                  </button>

                  <button
                    type="button"
                    className="button"
                    onClick={this.updateKey}
                  >
                    Update key
                  </button>
                </div>

                <textarea />
              </div>
            ) : (
              <div>
                <Button className="button">Login</Button>

                <br />
                <br />

                <label>
                  <Input
                    autoFocus
                    placeholder="Your email address"
                    name="email"
                    validations={[
                      ValidationType.REQUIRED,
                      ValidationType.EMAIL
                    ]}
                    value={this.state.email}
                    onChange={event =>
                      this.setState(byPropKey("email", event.target.value))
                    }
                  />
                </label>

                <label>
                  <Input
                    placeholder="Your password"
                    type="password"
                    name="password"
                    minLength="8"
                    validations={[ValidationType.REQUIRED, ValidationType.GT]}
                    value={this.state.password}
                    onChange={event =>
                      this.setState(byPropKey("password", event.target.value))
                    }
                  />
                </label>
              </div>
            )}

            {this.state.error && (
              <p className="p-error">{this.state.error.message}</p>
            )}
          </div>

          <br />

          <Link className="back" to={ROUTES.HOME}>
            Back
          </Link>
        </Form>
      </div>
    );
  }
}

const AboutView = ({ history }) => (
  <AnimLayout>
    <div className="about-div">
      <h2>YSES Demo</h2>
      <GetDataForm history={history} />
    </div>
  </AnimLayout>
);

export default AboutView;
