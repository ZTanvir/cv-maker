import InputField from "../../InputField";

const CustomizeColor = ({ handleColorBtn }) => {
    return (
        <section>
            <h2>Color</h2>
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
        </section>
    );
};
export default CustomizeColor;
