import styles from "../../styles/CvPreview/displayCompanyInfo.module.css";

const DisplayCompanyInfo = ({ companyDetails }) => {
    const startDate = companyDetails.startDate;
    const endDate = companyDetails.endDate;
    const companyName = companyDetails.institute;
    const designation = companyDetails.designation;
    const description = companyDetails.description;

    return (
        <section className={styles.companyContainer}>
            {companyDetails.visibility ? (
                <div className={styles.companyInformation}>
                    <div className={styles.leftSide}>
                        <p>
                            {startDate} - {endDate}
                        </p>
                        <p>{companyName}</p>
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
