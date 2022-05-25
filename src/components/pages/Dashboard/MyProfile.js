import React from "react";

const MyProfile = () => {
  const email = localStorage.getItem("email");
  return (
    <div className="mt-10 ml-10">
      <h1 className="text-2xl">My Profile</h1>
      <h1></h1>
    </div>
  );
};

export default MyProfile;
