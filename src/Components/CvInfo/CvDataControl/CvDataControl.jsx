import styles from "../../../styles/cvDataControl.module.css";

const CvDataControl = ({ handleClearBtn, handleLoadBtn }) => {
    return (
        <section className={styles.cvDataControlContainer}>
            <div className={styles.clearBtn} onClick={handleClearBtn}>
                <span className="material-symbols-outlined">delete</span> Clear
                Resume
            </div>
            <div className={styles.loadBtn} onClick={handleLoadBtn}>
                Load Example
            </div>
        </section>
    );
};

export default CvDataControl;
