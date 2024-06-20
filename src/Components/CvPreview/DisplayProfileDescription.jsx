import styles from "../../styles/CvPreview/displayProfileDescription.module.css";

const DisplayProfileDescription = ({ cvData }) => {
  const jobSummary = cvData.personal_details.jobSummary;

  return (
    <section className={styles.profileInfo}>
      <h2>Profile</h2>
      <div className="borderBottom"></div>
      <span className={styles.profileBgCircle}></span>
      <p>{jobSummary}</p>
    </section>
  );
};

export default DisplayProfileDescription;
