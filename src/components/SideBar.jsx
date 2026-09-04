import React from "react";
import "./Sidebar.css"
const SideBar = () => {
  return (
    <div className="sidebar-main">
      <div className="newrepo d-flex justify-content-between align-item-center">
        <p className="d-inline">Top Repositories</p>
        <button class="new-btn">
          <i class="fa-regular fa-window-maximize"></i>
          New
        </button>
      </div>
      <div className="search-repo">
        <div class="search-repo-btn w-25 mt-3">
          <form role="search" data-bs-theme="dark">
            <input
              class="form-control search-btn"
              type="search"
              placeholder="🔍︎ Find a repository ...."
              aria-label="Search"
              name="search"
            />
          </form>
        </div>
      </div>
      <div className="result">
        <p>git nix repo</p>
        <p>git nix repo</p>
        <p>git nix repo</p>
        <p>git nix repo</p>
        <p>git nix repo</p>
        <p>git nix repo</p>
        <p>git nix repo</p>
        <p>git nix repo</p>
        <p>git nix repo</p>
        <p>git nix repo</p>
        <p>git nix repo</p>
        <p>git nix repo</p>
        <p>git nix repo</p>
        <p>git nix repo</p>
        <p>git nix repo</p>
        <p>git nix repo</p>
        <p>git nix repo</p>
      </div>
    </div>
  );
};


export default SideBar;