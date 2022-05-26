import { signOut } from "firebase/auth";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import auth from "./../../firebase.init";

const Navbar = () => {
  const name = localStorage.getItem("user");
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("user");
    localStorage.removeItem("name");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="navbar bg-base-100 mx-auto shadow-lg fixed top-0 z-20">
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
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>

            {name ? (
              <>
                <li className="items-center px-3">
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li className="flex items-center">
                  <Link to="/dashboard/profile">{name}</Link>{" "}
                  <button className="bg-red-300 mx-3" onClick={handleSignOut}>
                    Sign Out
                  </button>
                </li>
              </>
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
