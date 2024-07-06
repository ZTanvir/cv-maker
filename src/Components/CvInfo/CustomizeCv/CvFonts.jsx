import styles from "../../../styles/cvFonts.module.css";

const CvFonts = ({ handleFontBtn, cvFont }) => {
    return (
        <section className={styles.cvFontsContainer}>
            <h2>Fonts</h2>
            <div classname={styles.btngroup}>
                <button
                    onclick={handlefontbtn}
                    data-font="roboto"
                    data-cvfont={cvfont === "roboto"}
                    classname={styles.robotobtn}
                >
                    <span>aa</span>
                    <span classname={styles.fontname}>roboto</span>
                </button>
                <button
                    onclick={handlefontbtn}
                    data-font="merriweather"
                    data-cvfont={cvfont === "merriweather"}
                    classname={styles.merriweatherbtn}
                >
                    <span>aa</span>
                    <span classname={styles.fontname}>merriweather</span>
                </button>
                <button
                    onclick={handlefontbtn}
                    data-font="fira sans"
                    data-cvfont={cvfont === "fira sans"}
                    classname={styles.firasansbtn}
                >
                    <span>aa</span>
                    <span classname={styles.fontname}>fira sans</span>
                </button>
            </div>
        </section>
    );
};
export default CvFonts;
