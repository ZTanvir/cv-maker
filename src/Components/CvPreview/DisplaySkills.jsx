import styles from "../../styles/CvPreview/skillRating.module.css";

const SkillRating = ({ skillName, level, bgColor }) => {
    const maxLevel = [1, 2, 3, 4, 5];
    return (
        <div>
            <div className={styles.skillSection}>
                {skillName}
                <span className={styles.ratingCircles}>
                    {maxLevel.map((item) => (
                        <span
                            key={crypto.randomUUID()}
                            style={
                                item <= level
                                    ? { backgroundColor: "red" }
                                    : { backgroundColor: "#E1E1E1" }
                            }
                            className={styles.ratingCircle}
                        ></span>
                    ))}
                </span>
            </div>
        </div>
    );
};

const DisplaySkills = ({ cvData }) => {
    const skills = cvData.skills;

    return (
        <section>
            <h2>Skills</h2>
            {skills.map((skill) => (
                <SkillRating
                    key={crypto.randomUUID()}
                    skillName={skill.skill}
                    level={skill.level}
                />
            ))}
        </section>
    );
};
export default DisplaySkills;
