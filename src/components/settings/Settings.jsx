import React, { useState } from "react";
import "./Settings.css";

const Settings = () => {
  const [preferences, setPreferences] = useState({
    reviewPings: true,
    weeklyDigest: false,
    signedCommits: true,
  });
  const toggle = (name) =>
    setPreferences({ ...preferences, [name]: !preferences[name] });

  return (
    <main className="settings-page">
      <h1>Settings</h1>
      <section className="settings-card">
        <h2>Profile</h2>
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <label>
              Display name
              <input defaultValue="Alquama Afzal" />
            </label>
          </div>
          <div className="col-12 col-md-6">
            <label>
              Username
              <input defaultValue="alquama" />
            </label>
          </div>
          <div className="col-12 col-md-6">
            <label>
              Role
              <input defaultValue="Platform Engineer" />
            </label>
          </div>
          <div className="col-12 col-md-6">
            <label>
              Email
              <input defaultValue="you@example.com" />
            </label>
          </div>
        </div>
        <button className="save-button">Save changes</button>
      </section>
      <section className="settings-card preferences-card">
        <h2>Preferences</h2>
        <Preference
          title="Review pings"
          text="Notify me the moment a review is assigned."
          name="reviewPings"
          checked={preferences.reviewPings}
          toggle={toggle}
        />
        <Preference
          title="Weekly digest"
          text="A Monday summary of repository activity."
          name="weeklyDigest"
          checked={preferences.weeklyDigest}
          toggle={toggle}
        />
        <Preference
          title="Require signed commits"
          text="Reject unsigned pushes on protected branches."
          name="signedCommits"
          checked={preferences.signedCommits}
          toggle={toggle}
        />
      </section>
    </main>
  );
};

const Preference = ({ title, text, name, checked, toggle }) => (
  <div className="preference-row">
    <div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
    <button
      className={`switch ${checked ? "on" : ""}`}
      onClick={() => toggle(name)}
      aria-label={title}
    >
      <span />
    </button>
  </div>
);
export default Settings;
