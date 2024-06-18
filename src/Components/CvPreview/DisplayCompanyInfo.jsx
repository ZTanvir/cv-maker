import styles from "../../styles/CvPreview/displayExperience.module.css";
import { getMonthYearFromDate } from "../../utils/helpers";

const DisplayCompanyInfo = ({ companyDetails }) => {
  const startDate = getMonthYearFromDate(companyDetails.startDate);
  const endDate = getMonthYearFromDate(companyDetails.endDate);
  const companyName = companyDetails.institute;
  const designation = companyDetails.designation;
  const description = companyDetails.description;

  return (
    <section className={styles.companyContainer}>
      {companyDetails.visibility ? (
        <div className={styles.companyInformation}>
          <div className={styles.leftSide}>
            <div className={styles.jobTimeLines}>
              <div>{startDate}</div>
              <div>
                <span className="material-symbols-outlined">remove</span>
              </div>
              <div>{endDate}</div>
            </div>
            <p className={styles.companyName}>{companyName}</p>
          </div>
          <div className={styles.experienceRightSide}>
            <p>{designation}</p>
            <p>{description}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
};
export default DisplayCompanyInfo;

//C8:FF:28:39:DE:29
//DA:A9:6A:97:74:62
// DA-6C-A6-A2-EC-75	 tahsin
