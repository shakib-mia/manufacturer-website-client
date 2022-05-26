import React, { useState } from "react";

const MyProfile = () => {
  const email = localStorage.getItem("email");
  const name = localStorage.getItem("user");

  const [education, setEducation] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");

  const addDetails = (event) => {
    event.preventDefault();

    const updatedData = {
      education: education,
      location: location,
      phone: phone,
      linkedInProfile: linkedInProfile,
    };

    fetch(`https://intense-ravine-32136.herokuapp.com/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="mt-28">
      <h1 className="text-2xl text-center font-bold mb-5">My Profile</h1>
      <p className="text-center text-lg">Name: {name}</p>
      <p className="text-center text-lg">Email: {email}</p>
      <form className="w-1/2 shadow-lg p-12 mx-auto" onSubmit={addDetails}>
        <textarea
          onBlur={(e) => setEducation(e.target.value)}
          type="text"
          className="w-11/12 block mx-auto border-2 my-4 py-3 px-2"
          placeholder="Education"
        ></textarea>
        <input
          onBlur={(e) => setPhone(e.target.value)}
          type="text"
          className="w-11/12 block mx-auto border-2 my-4 py-3 px-2"
          placeholder="Enter Your Phone Number"
        />
        <input
          onBlur={(e) => setLocation(e.target.value)}
          type="text"
          name="email"
          className="w-11/12 block mx-auto border-2 my-4 py-3 px-2"
          placeholder="Add Your Location"
        />
        <input
          onBlur={(e) => setLinkedInProfile(e.target.value)}
          type="text"
          name="email"
          className="w-11/12 block mx-auto border-2 my-4 py-3 px-2"
          placeholder="Put Linked In Profile Link"
        />
        <input
          type="submit"
          value="Add Details"
          className="btn text-black hover:text-white block mx-auto "
        />
      </form>
    </div>
  );
};

export default MyProfile;
