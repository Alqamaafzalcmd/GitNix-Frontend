import React from "react";
import "./Issues.css";

// Replace this array with data from your backend later.
const issues = [
  { id: 412, title: "Streaming diff viewer drops trailing hunks on large files", repository: "alquama/portfolio-website", status: "open", label: "bug", comments: 6 },
  { id: 288, title: "Add path-scoped code owners to branch protection", repository: "alquama/task-manager-api", status: "open", label: "enhancement", comments: 3 },
  { id: 91, title: "Checkout summary misaligned at 1280px", repository: "nebula-labs/ecommerce-ui", status: "closed", label: "ui", comments: 12 },
  { id: 57, title: "Draft posts should keep their slug on publish", repository: "alquama/blog-platform", status: "open", label: "cms", comments: 1 },
];

const Issues = () => {
  return (
    <main className="issues-page">
      <header className="issues-heading">
        <h1>Issues</h1>
        <p>Assigned to you across all projects.</p>
      </header>

      <section className="issues-list">
        {issues.map((issue) => (
          <article className="issue-row" key={issue.id}>
            <i className={`issue-status fa-solid ${issue.status === "open" ? "fa-circle-dot open" : "fa-circle-check closed"}`} />
            <div className="issue-main-content">
              <h2>{issue.title}</h2>
              <p>{issue.repository} #{issue.id} · {issue.status}</p>
            </div>
            <span className="issue-label">{issue.label}</span>
            <span className="issue-comments"><i className="fa-regular fa-message" /> {issue.comments}</span>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Issues;
