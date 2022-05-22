import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mx-auto shadow-lg fixed top-0">
      <div className="container mx-auto">
        <div className="flex-1">
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            daisyUI
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
