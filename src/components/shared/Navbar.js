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
    <div>
      <div class="navbar-start flex w-full justify-between">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
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
        <NavLink to="/" className="btn btn-ghost normal-case text-center">
          Manufacturer Website
        </NavLink>
        <div></div>
      </div>
      <div className="navbar bg-base-100 mx-auto shadow-lg fixed top-0 z-20 hidden lg:block">
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
    </div>
  );
};

export default Navbar;
