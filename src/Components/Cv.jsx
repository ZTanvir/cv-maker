// In front user will see both form field which will use to get their user information
// and how the information will look in the cv
import CvInfo from "./CvInfo/CvInfo";
import CvPreview from "./CvPreview/CvPreview";
import filledCvData from "./FilledCvData.js";
import emptyCvData from "./EmptyCvData.js";

import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Html2Pdf from "js-html2pdf";
import styles from "../styles/cv.module.css";

const Cv = () => {
    const [cvData, setCvData] = useState(filledCvData);
    const [cvFont, setCvFont] = useState("Merriweather");
    const [cvColor, setCvColor] = useState("#CDB4DB");
    // Hidden button under Personal Details form section
    const resetPersonalDetailsFormBtn = useRef();
    // Hidden Load button under Personal Details form section
    const loadPersonalDetailsFormBtn = useRef();
    // Cv Preview component
    const cvPreviewElement = useRef();

    const handleClearBtn = (e) => {
        setCvData(emptyCvData);
        // Clear the Personal deatils form
        resetPersonalDetailsFormBtn.current.click();
    };
    const handleLoadBtn = (e) => {
        setCvData(filledCvData);
        // Load the personal details form
        loadPersonalDetailsFormBtn.current.click();
    };
    // print the Cv using react-to-print and js-html2pdf library
    const handleDownloadCvBtn = useReactToPrint({
        content: () => cvPreviewElement.current,
        print: async (printIframe) => {
            const document = printIframe.contentDocument;
            if (document) {
                const html = cvPreviewElement.current;
                const options = {
                    margin: 0,
                    filename: `${cvData.personal_details.fname}Cv.pdf`,
                };
                const exporter = new Html2Pdf(html, options);
                await exporter.getPdf(options);
            }
        },
    });

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
                    handleDownloadCvBtn={handleDownloadCvBtn}
                    handleFontBtn={handleFontBtn}
                    cvFont={cvFont}
                    handleColorBtn={handleColorBtn}
                    cvColor={cvColor}
                    resetPersonalDetailsForm={resetPersonalDetailsFormBtn}
                    loadPersonalDetailsForm={loadPersonalDetailsFormBtn}
                />
            </aside>
            <main className={styles.cvPreviewContainer}>
                <CvPreview
                    cvInfo={cvData}
                    cvFont={cvFont}
                    cvColor={cvColor}
                    ref={cvPreviewElement}
                />
            </main>
        </section>
    );
};
export default Cv;
