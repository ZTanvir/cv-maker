import styles from "../../../styles/cvFonts.module.css";

const CvFonts = ({ handleFontBtn, cvFont }) => {
    const fonts = ["Roboto", "Merriweather", "Fira Sans"];

    return (
        <section className={styles.cvFontsContainer}>
            <h2>Fonts</h2>
            <div className={styles.btnGroup}>
                {fonts.map((font) => (
                    <button
                        key={crypto.randomUUID()}
                        onClick={handleFontBtn}
                        data-cvfont={`${font};${cvFont === font}`}
                        className={styles.robotoBtn}
                    >
                        <span>Aa</span>
                        <span className={styles.fontName}>{font}</span>
                    </button>
                ))}
            </div>
        </section>
    );
};
export default CvFonts;
