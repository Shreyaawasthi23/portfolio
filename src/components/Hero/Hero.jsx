import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shreya Awasthi</h1>
        <p className={styles.description}>
          I'm a Software Developer Intern with 6 months of experience in JavaScript, 
          React.js, Node.js, Express.js, and MongoDB. Additionally, I have knowledge of C++, Next.js, SQL, Java and Python.
        </p>
        <a href="mailto:yshreyaawasthi23@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/image.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
