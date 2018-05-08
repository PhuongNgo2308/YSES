import React from "react";
import AnimLayout from "/src/views/App/AnimLayout";

export default class AboutView extends React.Component {
  render() {
    return (
      <AnimLayout>
        <div className="about-div">
          <h2>About Us</h2>
          <p>Just an old guy likes to study new things.</p>
        </div>
      </AnimLayout>
    );
  }
}
