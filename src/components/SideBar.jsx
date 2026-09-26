import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const menuItems = [
  { to: "/", icon: "fa-house", text: "Overview" },
  { to: "/repositories", icon: "fa-book-bookmark", text: "Repositories" },
  { to: "/issues", icon: "fa-circle-dot", text: "Issues" },
  { to: "/pullRequests", icon: "fa-code-pull-request", text: "Pull Requests" },
  { to: "/explore", icon: "fa-compass", text: "Explore" },
];

const SideBar = () => {
  return (
    <aside className="sidebar-main">
      <div className="brand-area">
        <img className="brand-icon" src="./gitnixIconSmall.png" alt="" />
        <span>GitNix</span>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink key={item.text} to={item.to} end={item.to === "/"}>
            <i className={`fa-solid ${item.icon}`}></i>
            <span>{item.text}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <NavLink className="settings-link" to="/settings">
          <i className="fa-solid fa-gear"></i>
          <span>Settings</span>
        </NavLink>
        <div className="user-card">
          <div className="user-avatar">AA</div>
          <div>
            <strong>Alquama Afzal</strong>
            <small>@alquama</small>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
