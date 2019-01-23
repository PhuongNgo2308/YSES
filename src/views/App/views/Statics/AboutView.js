import React, { Component } from "react";
import AnimLayout from "../../../../views/App/AnimLayout";
import { Link, withRouter } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";

// auth service
import * as firebaseAuth from "../../../../services/firebaseAuth";

// custom functions
import * as ROUTES from "../../../../global/ROUTES";
import { byPropKey } from "../../../../extensions/handling";
import ValidationType from "../../../../extensions/ValidationType";

const INITIAL_STATE = {
  email: "",
  password: "",
  enckey: "",
  error: null
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
        // this.setState(() => ({ ...INITIAL_STATE }));

        // get data based on enc key
        debugger;
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
  };

  fetchData = event => {
    debugger;
    const _state = this.state;
  };

  updateKey = event => {};

  render() {
    return (
      <div className="div-getdataform">
        <Form onSubmit={this.handleSubmit}>
          <div>
            <Button className="button">Login</Button>

            <button type="button" className="button" onClick={this.fetchData}>
              Fetch Data
            </button>

            <button type="button" className="button" onClick={this.updateKey}>
              Update key
            </button>

            <Link className="back" to={ROUTES.HOME}>
              Back
            </Link>
          </div>

          <br />

          <label>
            Email (*)
            <Input
              autoFocus
              placeholder="Your email address"
              name="email"
              validations={[ValidationType.REQUIRED, ValidationType.EMAIL]}
              value={this.state.email}
              onChange={event =>
                this.setState(byPropKey("email", event.target.value))
              }
            />
          </label>

          <label>
            Password (*)
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

          <label>
            Encyption key (*)
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

          <textarea />

          <br />

          {this.state.error && (
            <p className="p-error">{this.state.error.message}</p>
          )}
        </Form>
      </div>
    );
  }
}

const AboutView = ({ history }) => (
  <AnimLayout>
    <div className="about-div">
      <h2>About Us</h2>
      <GetDataForm history={history} />
    </div>
  </AnimLayout>
);

export default AboutView;
