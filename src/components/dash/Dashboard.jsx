import React from "react";
import SideBar from "../SideBar";
import Navbar from "../Navbar";
import "./Dashboard.css";

const stats = [
  { icon: "fa-book-bookmark", number: "12", label: "Repositories" },
  { icon: "fa-sliders", number: "248", label: "Commits" },
  { icon: "fa-code-branch", number: "8", label: "Pull Requests" },
  { icon: "fa-circle-dot", number: "5", label: "Issues" },
];

const repositories = [
  {
    name: "alquama/portfolio-website",
    description:
      "Personal portfolio built with a custom SSR renderer and edge caching.",
    language: "TypeScript",
    stars: "248",
    time: "Updated 2 hours ago",
  },
  {
    name: "alquama/task-manager-api",
    description:
      "REST + streaming API for task orchestration with queue-backed workers.",
    language: "Node.js",
    stars: "164",
    time: "Updated 1 day ago",
  },
  {
    name: "gitnix/design-system",
    description:
      "Shared components and design tokens for the GitNix interface.",
    language: "CSS",
    stars: "92",
    time: "Updated 3 days ago",
  },
  {
    name: "learning/react-notes",
    description: "Small projects and notes from learning React and JavaScript.",
    language: "JavaScript",
    stars: "31",
    time: "Updated 5 days ago",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      {/* <SideBar /> */}
      <div className="dashboard-content-area">
        {/* <Navbar /> */}
        <main className="dashboard-main">
          <section className="welcome-card">
            <p className="page-eyebrow">WORKSPACE OVERVIEW</p>
            <h1>Good evening, Alquama Afzal</h1>
            <p>Here is a quick look at your GitNix workspace.</p>
          </section>

          <section className="row g-3 stats-row">
            {stats.map((stat) => (
              <div className="col-12 col-sm-6 col-xl-3" key={stat.label}>
                <article className="stat-card">
                  <i className={`fa-solid ${stat.icon}`}></i>
                  <h2>{stat.number}</h2>
                  <p>{stat.label}</p>
                </article>
              </div>
            ))}
          </section>

          <section className="repositories-section">
            <div className="section-title">
              <div>
                <h2>Recent repositories</h2>
                <p>Your recently updated projects.</p>
              </div>
              <button className="view-all-button">
                View all <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <div className="row g-4">
              {repositories.map((repo) => (
                <div className="col-12 col-lg-6" key={repo.name}>
                  <article className="repository-card">
                    <div className="repository-card-header">
                      <h3>
                        <i className="fa-solid fa-book-bookmark"></i>
                        {repo.name}
                      </h3>
                      <span>Public</span>
                    </div>
                    <p className="repository-description">{repo.description}</p>
                    <footer>
                      <div>
                        <span className="language-dot"></span>
                        {repo.language}
                        <span className="star">
                          <i className="fa-regular fa-star"></i> {repo.stars}
                        </span>
                      </div>
                      <time>{repo.time}</time>
                    </footer>
                  </article>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
