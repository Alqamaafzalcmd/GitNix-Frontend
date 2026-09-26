import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="top-navbar">
      <div className="search-box">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="search"
          placeholder="Search repositories, issues, people"
        />
        <span className="search-shortcut">⌘K</span>
      </div>

      <div className="navbar-actions">
        <button
          type="button"
          class="btn btn-muted position-relative rounded-circle notification-btn"
        >
          <i class="fa-regular fa-bell text-white"></i>
          <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
            <span class="visually-hidden">New alerts</span>
          </span>
        </button>
        <button className="new-repository-button">
          <i className="fa-solid fa-plus"></i>
          <span>New repository</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
