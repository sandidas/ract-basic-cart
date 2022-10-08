import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <NavLink title="Routes" className="btn btn-ghost normal-case text-xl">
            Routes
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink className={({ isActive }) => (isActive ? "font-medium text-lime-400" : "text-yellow-50")} to="/home">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className={({ isActive }) => (isActive ? "font-medium text-lime-400" : "text-yellow-50")} to="/friends">
                friends
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "font-medium text-lime-400" : "text-yellow-50")} to="/countries">
                countries
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "font-medium text-lime-400" : "text-yellow-50")} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "font-medium text-lime-400" : "text-yellow-50")} to="/products">
              Products
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? "font-medium text-lime-400" : "text-yellow-50")} to="/orders">
              Orders
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
