import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import AddProduct from "./AddProduct";

const Dashbord = () => {
  const role = localStorage.getItem("role");
  return (
    <div className="drawer">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content text-center">
        <label
          htmlFor="dashboard-sidebar"
          className="drawer-overlay z-40 bg-green-400 px-5 py-2 mt-5"
        >
          Open drawer
        </label>
        <h2 className="text-2xl font-bold text-purple-500 mt-6 text-center">
          Welcome to your Dashboard
        </h2>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side shadow-md">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content mt-16">
          {role === "user" ? (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/orders">My Orders</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-review">Add A Review</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/profile">My Profile</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/profile">My Profile</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-all-orders">
                  Manage All Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/add-product">Add A Product</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/make-admin">Make Admin</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manage-products">
                  Manage Products
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashbord;
