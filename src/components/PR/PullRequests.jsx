import React from "react";
import "./PullRequests.css";

//dummy data for pullrequests
const pullRequests = [
  {
    id: 142,
    title: "feat: partial clone support for monorepo checkouts",
    repository: "alquama/task-manager-api",
    status: "Review requested",
    additions: 842,
    deletions: 317,
    active: true,
  },
  {
    id: 98,
    title: "refactor: extract diff renderer into worker thread",
    repository: "alquama/portfolio-website",
    status: "Approved",
    additions: 211,
    deletions: 540,
    active: false,
  },
  {
    id: 63,
    title: "fix: checkout total recalculates on coupon removal",
    repository: "nebula-labs/ecommerce-ui",
    status: "Merged",
    additions: 34,
    deletions: 12,
    active: false,
  },
];

const PullRequests = () => {
  return (
    <main className="pull-requests-page">
      <header className="pull-requests-heading">
        <h1>Pull requests</h1>
        <p>Reviews waiting on you, newest first.</p>
      </header>

      <section className="pull-request-list">
        {pullRequests.map((pullRequest) => (
          <article
            className={`pull-request-card ${pullRequest.active ? "needs-review" : ""}`}
            key={pullRequest.id}
          >
            <i
              className={`fa-solid fa-code-branch pull-request-icon ${pullRequest.status === "Merged" ? "merged" : ""}`}
            />
            <div className="pull-request-content">
              <h2>{pullRequest.title}</h2>
              <p>
                {pullRequest.repository} #{pullRequest.id} ·{" "}
                {pullRequest.status}
              </p>
            </div>
            <div className="pull-request-changes">
              <span>+{pullRequest.additions}</span>
              <span>-{pullRequest.deletions}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default PullRequests;
