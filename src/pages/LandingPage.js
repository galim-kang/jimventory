import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

const sections = [
  {
    title: "Section 1 Title",
    text: "This is the text for section 1.",
  },
  {
    title: "Section 2 Title",
    text: "This is the text for section 2.",
  },
  {
    title: "Section 3 Title",
    text: "This is the text for section 3.",
  },
  {
    title: "Section 4 Title",
    text: "This is the text for section 4.",
  },
  {
    title: "Section 5 Title",
    text: "This is the text for section 5.",
  },
];

const TempImage = () => {
  return (
    <div
      style={{ backgroundColor: "#808080", width: "200px", height: "200px" }}
    />
  );
};

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.fullscreenSection}>
        {/* <TempImage /> */}
        <h1 style={{ color: "white" }}>
          open your
          <br />
          JIMVENTORY!
        </h1>
        <Link to="/main" className={styles.link}>
          <button className={styles.startButton}>Start!</button>
        </Link>
      </section>
      {sections.map((section, index) => (
        <section key={index} className={styles.section}>
          <h2 className={styles.title}>{section.title}</h2>
          <TempImage />
          <p className={styles.text}>{section.text}</p>
        </section>
      ))}
    </div>
  );
};

export default LandingPage;
