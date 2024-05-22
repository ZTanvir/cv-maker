// In front user will see both form field which will use to get their user information
// and how the information will look in the cv
import CvInfo from "./CvInfo/CvInfo";
import CvPreview from "./CvPreview/CvPreview";
import cvInfo from "../Components/CvData.js";
import { useState } from "react";

const Cv = () => {
    const [cvData, setCvData] = useState(cvInfo);

    return (
        <section className="cv-maker">
            {/* <CvInfo cvData={cvData} setCvData={setCvData} /> */}
            <CvPreview cvInfo={cvData} />
        </section>
    );
};
export default Cv;
