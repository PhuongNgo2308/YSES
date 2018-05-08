// common components
import React from "react";
// data service
import FbAPI from "/src/data/FirebaseAPI";
// custom layout
import AnimLayout from "/src/views/App/AnimLayout";

export default class UserInfo extends React.Component {
  render() {
    const userinfo = FbAPI.getUserInfo(this.props.match.params.uid);
    if (!userinfo) {
      return <div>The user was not found.</div>;
    }

    return (
      <AnimLayout>
        <div className="userinfo-div">
          <h2>User Information</h2>
          <p>
            <span>Username: {userinfo.username}</span>
            <br />
            <span>Email: {userinfo.email}</span>
          </p>
        </div>
      </AnimLayout>
    );
  }
}
