import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar";

const Dashboard = () => {
  const [repos, setRepos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestedRepo, setSuggestedRepo] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const userId = localStorage.getItem("userId");
      try {
        console.log("fetching ...");
        let res = await axios.get(`http://localhost:8082/repo/user/${userId}`);
        // console.log(res.data.repos);
        setRepos(res.data.repos);
      } catch (err) {
        console.log("Error while fetching repo", err);
      }
    };

    const fetchSuggestedRepos = async () => {
      try {
        console.log("fetching ...");
        let res = await axios.get(`http://localhost:8082/repo/all`);
        //  console.log(res.data);
        setSuggestedRepo(res.data);
        console.log(suggestedRepo);
      } catch (err) {
        console.log("Error while fetching repos", err);
      }
    };

    fetchSuggestedRepos();
    fetchRepos();
  });

  // search with all repos of logged in user
  useEffect(() => {
    if (searchQuery == "") {
       () => setSearchResults(repos);
    } else {
      const filterRepo = repos.filter((r) =>
        r.name.toLowerCase().includes(searchQuery.toLocaleLowerCase()),
      );

      () => setSearchResults(filterRepo);
    }
  }, [searchQuery, repos]);

  return (
    <div>
      <Navbar/>
    </div>
  )
};

export default Dashboard;
