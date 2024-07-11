import styles from "../../../styles/cvDataControl.module.css";
import pdfDownloaderIcon from "../../../assets/pdfDownload.svg";

const CvDataControl = ({
    handleClearBtn,
    handleLoadBtn,
    handleDownloadCvBtn,
}) => {
    return (
        <section className={styles.cvDataControlContainer}>
            <div className={styles.clearBtn} onClick={handleClearBtn}>
                <span className="material-symbols-outlined">delete</span> Clear
                Resume
            </div>
            <div className={styles.loadBtn} onClick={handleLoadBtn}>
                Load Example
            </div>
            <div
                title="Download as pdf"
                onClick={handleDownloadCvBtn}
                className={styles.downloadPdf}
            >
                <img
                    className={styles.pdfDownloaderImg}
                    src={pdfDownloaderIcon}
                    alt="Download cv"
                />
            </div>
        </section>
    );
};

export default CvDataControl;
