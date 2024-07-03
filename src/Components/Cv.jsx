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
    const [cvFont, setCvFont] = useState("Roboto");

    const handleClearBtn = (e) => {
        setCvData(emptyCvData);
    };
    const handleLoadBtn = (e) => {
        setCvData(filledCvData);
    };
    // CvFonts component btn
    const handleFontBtn = (e) => {
        const font = e.currentTarget.dataset["font"];
        setCvFont(font);
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
                />
            </aside>
            <main className={styles.cvPreviewContainer}>
                <CvPreview cvInfo={cvData} cvFont={cvFont} />
            </main>
        </section>
    );
};
export default Cv;
