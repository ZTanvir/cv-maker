import DisplayCompanyInfo from "./DisplayCompanyInfo";
import styles from "../../styles/CvPreview/displayCompanyInfo.module.css";

const DisplayExperience = ({ cvData }) => {
    const companies = cvData.experience;
    return (
        <section className={styles.companysInfo}>
            <h2>Experience</h2>
            {companies.map((company) => (
                <DisplayCompanyInfo key={company.id} companyDetails={company} />
            ))}
        </section>
    );
};
export default DisplayExperience;
