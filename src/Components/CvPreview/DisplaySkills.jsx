const SkillRating = ({ skillName, level }) => {
    const maxLevel = [1, 2, 3, 4, 5];
    return (
        <div>
            <p>
                {skillName}
                <span>
                    {maxLevel.map((item) => (
                        <div key={crypto.randomUUID()}></div>
                    ))}
                </span>
            </p>
        </div>
    );
};

const DisplaySkills = ({ cvData }) => {
    const skills = cvData.skills;

    return (
        <section>
            <h2>Skills</h2>
        </section>
    );
};
export default DisplaySkills;
