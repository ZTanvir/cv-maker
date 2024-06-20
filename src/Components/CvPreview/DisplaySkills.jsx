import styles from "../../styles/CvPreview/skillRating.module.css";

const SkillRating = ({ skillName, level, bgColor }) => {
  const maxLevel = [1, 2, 3, 4, 5];
  return (
    <div className={styles.skillSection}>
      <span className={styles.skillName}>{skillName}</span>
      <span className={styles.ratingCircles}>
        {maxLevel.map((item) => (
          <span
            key={crypto.randomUUID()}
            style={
              item <= level
                ? { backgroundColor: "var(--color-yellow)" }
                : { backgroundColor: "#E1E1E1" }
            }
            className={styles.ratingCircle}
          ></span>
        ))}
      </span>
    </div>
  );
};

const DisplaySkills = ({ cvData }) => {
  const skills = cvData.skills;

  return (
    <section className={styles.skillsSection}>
      <h2>Skills</h2>
      <div className={styles.skillsRating}>
        {skills.map((skill) => (
          <SkillRating
            key={crypto.randomUUID()}
            skillName={skill.skill}
            level={skill.level}
          />
        ))}
      </div>
    </section>
  );
};
export default DisplaySkills;
