import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Repositories.css";

const repositories = [
  {
    slug: "portfolio-website",
    name: "portfolio-website",
    description:
      "Personal portfolio built with a custom SSR renderer and edge caching.",
    language: "TypeScript",
    stars: 248,
    updated: "Updated 2 hours ago",
  },
  {
    slug: "task-manager-api",
    name: "task-manager-api",
    description: "REST API for task orchestration with queue-backed workers.",
    language: "Node.js",
    stars: 164,
    updated: "Updated 1 day ago",
  },
  {
    slug: "design-system",
    name: "design-system",
    description: "Shared components and design tokens for GitNix.",
    language: "CSS",
    stars: 92,
    updated: "Updated 3 days ago",
  },
  {
    slug: "react-notes",
    name: "react-notes",
    description: "Small projects and notes from learning React and JavaScript.",
    language: "JavaScript",
    stars: 31,
    updated: "Updated 5 days ago",
  },
];

const files = [
  ["folder", "app", "Add landing page header", "2 hours ago"],
  ["folder", "components", "Update UI primitives", "1 day ago"],
  ["folder", "lib", "Add utility functions", "3 days ago"],
  ["folder", "public", "Add images and assets", "5 days ago"],
  ["folder", "styles", "Update global styles", "4 days ago"],
  ["file", ".gitignore", "Initial commit", "1 week ago"],
  ["file", "README.md", "Update README.md", "2 hours ago"],
  ["file", "package.json", "Add dependencies", "1 week ago"],
];

function RepositoryList() {
  return (
    <main className="repository-page">
      <div className="repository-page-heading">
        <div>
          <p className="repo-page-label">YOUR WORKSPACE</p>
          <h1>Repositories</h1>
          <p>Projects you have created or contributed to.</p>
        </div>

        <button className="repo-new-button">
          <i className="fa-solid fa-plus" /> New repository
        </button>
      </div>

      <div className="repository-filter">
        <i className="fa-solid fa-magnifying-glass" />
        <input placeholder="Find a repository" />
      </div>

      <div className="row g-3">
        {repositories.map((repo) => (
          <div className="col-12 col-md-6" key={repo.slug}>
            <Link
              className="repository-list-card"
              to={`/repositories/${repo.slug}`}
            >
              <div className="repository-list-title">
                <h2>
                  <i className="fa-solid fa-book-bookmark" />
                  alquama/<b>{repo.name}</b>
                </h2>
                <span>Public</span>
              </div>

              <p>{repo.description}</p>

              <footer>
                <span>
                  <i className="repo-language-dot" />
                  {repo.language}
                </span>
                <span>
                  <i className="fa-regular fa-star" /> {repo.stars}
                </span>
                <time>{repo.updated}</time>
              </footer>
              
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

function RepositoryDetails({ repository }) {
  return (
    <main className="repository-page repository-details-page">
      <header className="repo-details-heading">
        <div>
          <h1>
            <span>alquama /</span> {repository.name}
          </h1>
          <p>{repository.description}</p>
        </div>
        <div className="repo-actions">
          <button>
            <i className="fa-regular fa-eye" /> Watch <small>12</small>
          </button>
          <button>
            <i className="fa-solid fa-code-fork" /> Fork <small>18</small>
          </button>
          <button>
            <i className="fa-regular fa-star" /> Star{" "}
            <small>{repository.stars}</small>
          </button>
        </div>
      </header>
      <nav className="repo-tabs">
        <button className="active">Code</button>
        <button>
          Issues <small>3</small>
        </button>
        <button>
          Pull Requests <small>2</small>
        </button>
        <button>Actions</button>
        <button>Settings</button>
      </nav>
      <div className="row g-4 repo-content-row">
        <section className="col-12 col-xl-8">
          <div className="branch-row">
            <button className="branch-button">
              <i className="fa-solid fa-code-branch" /> main{" "}
              <i className="fa-solid fa-chevron-down" />
            </button>
            <span>
              <i className="fa-solid fa-code-branch" /> 3 branches
            </span>
            <span>
              <i className="fa-solid fa-tag" /> 3 tags
            </span>
            <button className="clone-button">Clone</button>
          </div>
          <div className="files-card">
            <div className="latest-commit">
              <strong>alquama</strong>
              <span>Update README.md</span>
              <span>
                <i className="fa-solid fa-sliders" /> 482 commits
              </span>
            </div>
            {files.map(([type, name, message, time]) => (
              <div className="file-row" key={name}>
                <span className={`file-icon ${type}`}>
                  <i
                    className={`fa-${type === "folder" ? "regular fa-folder" : "regular fa-file"}`}
                  />
                </span>
                <strong>{name}</strong>
                <span>{message}</span>
                <time>{time}</time>
              </div>
            ))}
          </div>
          <article className="readme-card">
            <h2>README.md</h2>
            <h3>Hi, I'm alquama</h3>
            <p>
              {repository.description} This repository is maintained on GitNix
              and mirrors every release tag automatically.
            </p>
            <span>#ssr</span>
            <span>#typescript</span>
            <span>#edge</span>
          </article>
        </section>
        <aside className="col-12 col-xl-4">
          <div className="repo-side-card">
            <h2>ABOUT</h2>
            <p>{repository.description}</p>
            <div>
              <i className="fa-regular fa-star" /> {repository.stars} stars
            </div>
            <div>
              <i className="fa-regular fa-eye" /> 12 watching
            </div>
            <div>
              <i className="fa-solid fa-code-fork" /> 18 forks
            </div>
          </div>
          
          <div className="repo-side-card languages-card">
            <h2>LANGUAGES</h2>
            <div className="language-bar">
              <span />
              <span />
              <span />
            </div>
            <p>
              <i className="purple-dot" />
              TypeScript <b>72%</b>
            </p>
            <p>
              <i className="cyan-dot" />
              CSS <b>21%</b>
            </p>
            <p>
              <i className="orange-dot" />
              Shell <b>7%</b>
            </p>
          </div>

        </aside>
      </div>
    </main>
  );
}

const Repositories = () => {
  const { repoName } = useParams();
  // finding repositories   --------
  const repository = repositories.find((repo) => repo.slug === repoName);
  return repository ? (
    <RepositoryDetails repository={repository} />
  ) : (
    <RepositoryList />
  );
};
export default Repositories;
