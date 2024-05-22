import styles from "../../styles/CvPreview/nameAndProfession.module.css";

const NameAndProfession = ({ cvData }) => {
    const personalData = cvData.personal_details;
    const fullName = personalData.fname + " " + personalData.lname;
    const profession = personalData.profession;

    return (
        <section className={styles.userNameAndProfession}>
            <h2>{fullName}</h2>
            <p>{profession}</p>
        </section>
    );
};

export default NameAndProfession;
