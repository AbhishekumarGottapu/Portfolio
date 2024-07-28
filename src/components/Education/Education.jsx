import React from "react";
import styles from "./Education.module.css";
import educationData from "../../data/education.json";
import { EducationCard } from "./EducationCard";

export const Education = () => {
  return (
    <section id="education" className={styles.container}>
      <div className={styles.text}>
        <h2>Education</h2>
      </div>
      <div className={styles.content}>
        {educationData.map((edu, index) => (
          <EducationCard key={index} education={edu} />
        ))}
      </div>
    </section>
  );
};
