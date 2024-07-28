import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abhishek Kumar Gottapu</h1>
        <p className={styles.description}>
        I'm interested in becoming a full-stack developer with a specialization in React. Feel free to reach out if you'd like to know more!
        </p>
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
