import DisplayEduInstitute from "./DisplayEduInstitute";
import styles from "../../styles/CvPreview/displayEduInstitutes.module.css";

const DisplayEduInstitutes = ({ cvData }) => {
  const instituteList = cvData.education;

  return (
    <section className={styles.eduInstitutes}>
      <h2>Education</h2>
      <div className="borderBottom"></div>
      {instituteList.length > 0
        ? instituteList.map((institute) => (
            <DisplayEduInstitute key={institute.id} insituteInfo={institute} />
          ))
        : null}
    </section>
  );
};

export default DisplayEduInstitutes;
