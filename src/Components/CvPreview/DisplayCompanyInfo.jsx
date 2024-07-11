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
                                <span className="material-symbols-outlined">
                                    remove
                                </span>
                            </div>
                            <div>{endDate}</div>
                        </div>
                        <p className={styles.companyName}>{companyName}</p>
                    </div>
                    <div className={styles.experienceRightSide}>
                        <p className={styles.designation}>{designation}</p>
                        <p>{description}</p>
                    </div>
                </div>
            ) : null}
        </section>
    );
};
export default DisplayCompanyInfo;
