import React from "react";
import "./ExplorePage.css";

// dummy data --------------
const projects = [
  {
    name: "sveltekit/sveltekit",
    description: "The fast and efficient web framework",
    stars: "12.5k",
  },
  {
    name: "vercel/next.js",
    description: "The React framework for the web",
    stars: "98.1k",
  },
  {
    name: "prisma/prisma",
    description: "Next-generation ORM for Node.js",
    stars: "24.3k",
  },
  {
    name: "nebula-labs/atlas",
    description: "Distributed build cache for monorepos",
    stars: "4.8k",
  },
];

const collections = [
  "Build tooling",
  "Edge runtimes",
  "Developer CLIs",
  "Observability",
];

const ExplorePage = () => {
  return (
    <main className="explore-page">
      <header className="explore-heading">
        <h1>Explore</h1>
        <p>Projects gaining traction across the GitNix network this week.</p>
      </header>
      <section className="row g-4">
        {projects.map((project) => (
          <div className="col-12 col-md-6" key={project.name}>
            <article className="explore-project">
              <div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
              </div>
              <span>
                <i className="fa-regular fa-star" /> {project.stars}
              </span>
            </article>
          </div>
        ))}
      </section>
      <section className="collections">
        <h2>Collections</h2>
        <div className="row g-3">
          {collections.map((collection, index) => (
            <div className="col-12 col-sm-6 col-xl-3" key={collection}>
              <article className="collection-card">
                <h3>{collection}</h3>
                <p>{[42, 27, 61, 19][index]} repositories</p>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ExplorePage;
