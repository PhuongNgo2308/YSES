// common components
import React from "react";
import AnimLayout from "../../../../views/App/AnimLayout";

const UserInfoView = () => {
  const userinfo = {
    username: "ARCHER",
    email: "mecedes2308@gmail.com"
  };
  if (!userinfo) {
    return <div>The user was not found.</div>;
  }

  return (
    <AnimLayout>
      <div className="userinfo-div">
        <h2>About me</h2>
        <p>
          <span>
            Author: <b>{userinfo.username}</b>
          </span>
          <br />
          <span>
            Email: <b>{userinfo.email}</b>
          </span>
        </p>
      </div>
    </AnimLayout>
  );
};

export default UserInfoView;
