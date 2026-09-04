import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Navigate, Routes, Route } from "react-router-dom";
import Dashboard from "./dash/Dashboard.jsx"
import Issues from "./issue/Issues.jsx"
import Repositories from "./repo/Repositories.jsx"
import ExplorePage from "./explore/ExplorePage.jsx"
import PullRequests from "./PR/PullRequests.jsx"
import Discussion from "./discussion/discusstionPage.jsx"
import Navbar from "./Navbar.jsx";

const Main = () => {
    return (
      <div className="main-container">
        <Navbar />

        <div className="content ">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/issues" element={<Issues />} />
            <Route path="/repositories" element={<Repositories />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/discussion" element={<Discussion />} />
            <Route path="/pullRequests" element={<PullRequests />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    );
}

export default Main;
