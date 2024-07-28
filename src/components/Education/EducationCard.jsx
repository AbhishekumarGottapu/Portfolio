import React from "react";
import styles from "./EducationCard.module.css";

export const EducationCard = ({
  education: { schoolName, degree, duration, cgpa },
}) => {
    const formattedCGPA = cgpa > 10 ? `Percentage: ${cgpa}` : `CGPA: ${cgpa}`;

  return (
    <div className={styles.container}>
      <h3 className={styles.schoolName}>{schoolName}</h3>
      <p className={styles.degree}>{degree}</p>
      <p className={styles.duration}>{duration}</p>
      <p className={styles.cgpa}>{formattedCGPA}</p>
    </div>
  );
};
