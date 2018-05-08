// common components
import React from "react";
// custom layout
import AnimLayout from "/src/views/App/AnimLayout";

export default class RegisterView extends React.Component {
  render() {
    return (
      <AnimLayout>
        <div className="register-div">
          <h2>Register new Account</h2>
        </div>
      </AnimLayout>
    );
  }
}
