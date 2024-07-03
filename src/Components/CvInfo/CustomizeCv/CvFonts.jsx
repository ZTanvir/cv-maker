import styles from "../../../styles/cvFonts.module.css";

const CvFonts = () => {
    return (
        <section className={styles.cvFontsContainer}>
            <h2>Fonts</h2>
            <div className={styles.btnGroup}>
                <button className={styles.robotoBtn}>
                    <span>Aa</span>
                    <span className={styles.fontName}>Roboto</span>
                </button>
                <button className={styles.merriWeatherBtn}>
                    <span>Aa</span>
                    <span className={styles.fontName}>Merriweather</span>
                </button>
                <button className={styles.firaSansBtn}>
                    <span>Aa</span>
                    <span className={styles.fontName}>Fira Sans</span>
                </button>
            </div>
        </section>
    );
};
export default CvFonts;
