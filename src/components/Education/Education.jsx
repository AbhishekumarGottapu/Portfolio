import React from "react";
import styles from "./Education.module.css"; 
import educationData from "../../data/education.json"; 

export const Education = () => {
  return (
    <section id="education" className={styles.container}>
    <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        {educationData.map((edu, index) => (
          <div key={index} className={styles.educationItem}>
            <h3 className={styles.schoolName}>{edu.schoolName}</h3>
            <p className={styles.degree}>{edu.degree}</p>
            <p className={styles.duration}>{edu.duration}</p>
            <p className={styles.cgpa}>CGPA/%: {edu.cgpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
