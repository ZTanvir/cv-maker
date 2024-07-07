// In front user will see both form field which will use to get their user information
// and how the information will look in the cv
import CvInfo from "./CvInfo/CvInfo";
import CvPreview from "./CvPreview/CvPreview";
import filledCvData from "./FilledCvData.js";
import emptyCvData from "./EmptyCvData.js";
import { useState } from "react";
import styles from "../styles/cv.module.css";

const Cv = () => {
    const [cvData, setCvData] = useState(filledCvData);
    const [cvFont, setCvFont] = useState("Merriweather");
    const [cvColor, setCvColor] = useState("#CDB4DB");

    const handleClearBtn = (e) => {
        setCvData(emptyCvData);
    };
    const handleLoadBtn = (e) => {
        setCvData(filledCvData);
    };
    // CvFonts component btn
    const handleFontBtn = (e) => {
        let font = e.currentTarget.dataset["cvfont"];
        font = font.split(";")[0];
        setCvFont(font);
    };
    // CustomizeColor components color btn
    const handleColorBtn = (e) => {
        let cvColor = e.currentTarget.dataset["colorcode"];
        cvColor = cvColor.split(";")[0];
        setCvColor(cvColor);
    };

    return (
        <section className={styles.cvAppContainer}>
            <aside className={styles.cvInfoContainer}>
                <CvInfo
                    cvData={cvData}
                    setCvData={setCvData}
                    handleClearBtn={handleClearBtn}
                    handleLoadBtn={handleLoadBtn}
                    handleFontBtn={handleFontBtn}
                    cvFont={cvFont}
                    handleColorBtn={handleColorBtn}
                    cvColor={cvColor}
                />
            </aside>
            <main className={styles.cvPreviewContainer}>
                <CvPreview cvInfo={cvData} cvFont={cvFont} cvColor={cvColor} />
            </main>
        </section>
    );
};
export default Cv;
