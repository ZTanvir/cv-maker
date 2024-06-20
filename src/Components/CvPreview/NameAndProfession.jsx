import styles from "../../styles/CvPreview/nameAndProfession.module.css";

const NameAndProfession = ({ cvData }) => {
  const personalData = cvData.personal_details;
  const fname = personalData.fname;
  const lname = personalData.lname;
  const fullName = personalData.fname + " " + personalData.lname;
  const profession = personalData.profession;

  return (
    <section className={styles.userNameAndProfession}>
      <h2>
        <span>{fname}</span>
        <span>{lname}</span>
      </h2>
      <p>{profession}</p>
    </section>
  );
};

export default NameAndProfession;
