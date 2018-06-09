// common components
import React from "react";

const UserInfoView = () => {
  const userinfo = {
    username: "phuong ngo",
    email: "phuong@mail.com"
  };
  if (!userinfo) {
    return <div>The user was not found.</div>;
  }

  return (
    <div className="userinfo-div">
      <h2>User Information</h2>
      <p>
        <span>Username: {userinfo.username}</span>
        <br />
        <span>Email: {userinfo.email}</span>
      </p>
    </div>
  );
};

export default UserInfoView;
