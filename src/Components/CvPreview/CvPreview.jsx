import NameAndProfession from "./NameAndProfession";
import ProfilePicture from "./ProfilePicture";
import DisplayEduInstitutes from "./DisplayEduInstitutes";
import DisplayProfileDescription from "./DisplayProfileDescription";
import DisplayExperience from "./DisplayExperience";
import DisplayContract from "./DisplayContract";
import DisplaySkills from "./DisplaySkills";
import styles from "../../styles/cvPreview.module.css";

const CvPreview = ({ cvInfo, cvFont }) => {
    return (
        <main
            style={{ fontFamily: `${cvFont}, Times, serif` }}
            className={styles.cvPreview}
        >
            <header className={styles.cvPreviewHeader}>
                <section className={styles.cvPreviewHeaderLeft}>
                    <ProfilePicture />
                </section>
                <section className={styles.cvPreviewHeaderRight}>
                    <NameAndProfession cvData={cvInfo} />
                </section>
            </header>
            <main className={styles.cvPreviewMain}>
                <section className={styles.cvPreviewLeft}>
                    <DisplayEduInstitutes cvData={cvInfo} />
                    <DisplayContract cvData={cvInfo} />
                </section>
                <section className={styles.cvPreviewRight}>
                    <DisplayProfileDescription cvData={cvInfo} />
                    <DisplayExperience cvData={cvInfo} />
                    <DisplaySkills cvData={cvInfo} />
                </section>
            </main>
        </main>
    );
};
export default CvPreview;
