import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <h2 className="text-2xl font-bold text-purple-500">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side shadow-md">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content mt-16">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/dashboard/orders">My Orders</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/add-review">Add A Review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/profile">My Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashbord;
