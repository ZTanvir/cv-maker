import styles from "../../../styles/cvFonts.module.css";

const CvFonts = ({ handleFontBtn, cvFont }) => {
    return (
        <section className={styles.cvFontsContainer}>
            <h2>Fonts</h2>
            <div className={styles.btnGroup}>
                <button
                    onClick={handleFontBtn}
                    data-font="Roboto"
                    data-cvfont={cvFont === "Roboto"}
                    className={styles.robotoBtn}
                >
                    <span>Aa</span>
                    <span className={styles.fontName}>Roboto</span>
                </button>
                <button
                    onClick={handleFontBtn}
                    data-font="Merriweather"
                    data-cvfont={cvFont === "Merriweather"}
                    className={styles.merriWeatherBtn}
                >
                    <span>Aa</span>
                    <span className={styles.fontName}>Merriweather</span>
                </button>
                <button
                    onClick={handleFontBtn}
                    data-font="Fira Sans"
                    data-cvfont={cvFont === "Fira Sans"}
                    className={styles.firaSansBtn}
                >
                    <span>Aa</span>
                    <span className={styles.fontName}>Fira Sans</span>
                </button>
            </div>
        </section>
    );
};
export default CvFonts;
