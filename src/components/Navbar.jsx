import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-main text-light">
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid d-flex justify-content-evenly ">
          <button
            class="navbar-toggler fs-6"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="d-flex flex-row ms-3 mt-2">
            <img
              src="./gitnixIconSmall2.png"
              alt="logo"
              className="logo-height"
            />
            <p className="ms-2 me-5">Dashboard</p>
          </div>

          <div class="ms-5  w-25 me-5">
            <form class="d-flex " role="search" data-bs-theme="dark">
              <input
                class="form-control search-btn"
                type="search"
                placeholder="🔍︎ search repositorites, issues, people ...."
                aria-label="Search"
                name="search"
              />
            </form>
          </div>

          <div className="d-flex align-items-center ms-auto gap-4 bg-dark px-3 py-2">
            <i className="fa-solid fa-circle-plus text-secondary fs-5 options "></i>
            <i className="fa-solid fa-code-pull-request text-secondary fs-5 options"></i>
            <i className="fa-regular fa-circle-dot text-secondary fs-5 options"></i>
            <i className="fa-regular fa-newspaper text-secondary fs-5 options"></i>
            <i className="fa-regular fa-bell text-secondary fs-5 options"></i>
            <i className="fa-regular fa-circle-user text-secondary fs-1 "></i>
          </div>
          <div
            class="offcanvas offcanvas-start text-bg-dark custom-width"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <h4 className="text-white fs-4">
                <img
                  src="./gitnixIconSmall2.png"
                  alt="logo"
                  className="logo-height me-2"
                />
                GitNix
              </h4>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-start flex-grow-1 pe-5">
                <li class="nav-item  mb-2">
                  <NavLink
                    className="nav-link active side-options"
                    aria-current="page"
                    to="/"
                  >
                    <i class="fa-solid fa-house text-secondary fs-6 me-2"></i>{" "}
                    Home
                  </NavLink>
                </li>
                <li class="nav-item  mb-2">
                  <NavLink className="nav-link side-options" to="/issues">
                    <i className="fa-regular fa-circle-dot text-secondary fs-6 me-2"></i>{" "}
                    All Issues
                  </NavLink>
                </li>
                <li class="nav-item mb-2">
                  <NavLink className="nav-link side-options" to="/pullRequests">
                    <i className="fa-solid fa-code-pull-request text-secondary fs-6 me-2"></i>{" "}
                    All Pull Requests
                  </NavLink>
                </li>
                <li class="nav-item  mb-2">
                  <NavLink className="nav-link side-options" to="/repositories">
                    <i className="fa-regular fa-newspaper text-secondary fs-6 me-2"></i>
                    All Repositories
                  </NavLink>
                </li>

                <li class="nav-item  mb-2">
                  <NavLink className="nav-link side-options" to="/explore">
                    <i class="fa-brands fa-wpexplorer text-secondary fs-6 me-2"></i>{" "}
                    Explore
                  </NavLink>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search" data-bs-theme="dark">
                <input
                  class="form-control me-3 search-btn"
                  type="search"
                  placeholder="🔍︎ Search the repositories ...."
                  aria-label="Search"
                  name="query"
                />
                <button class="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
