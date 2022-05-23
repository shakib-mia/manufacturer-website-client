import { signOut } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router-dom";
import auth from "./../../firebase.init";

const Navbar = () => {
  const name = localStorage.getItem("user");
  const email = localStorage.getItem("email");
  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    window.location.reload();
  };
  return (
    <div className="navbar bg-base-100 mx-auto shadow-lg fixed top-0 z-10">
      <div className="container mx-auto">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            Manufacturer Website
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about-me">My Portfolio</NavLink>
            </li>

            {name ? (
              <li className="flex items-center">
                {name}{" "}
                <button className="bg-red-300 mx-3" onClick={handleSignOut}>
                  Sign Out
                </button>
              </li>
            ) : email ? (
              <li className="flex items-center">
                {email}{" "}
                <button className="bg-red-300 mx-3" onClick={handleSignOut}>
                  Sign Out
                </button>
              </li>
            ) : (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
