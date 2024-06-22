// In front user will see both form field which will use to get their user information
// and how the information will look in the cv
import CvInfo from "./CvInfo/CvInfo";
import CvPreview from "./CvPreview/CvPreview";
import cvInfo from "../Components/CvData.js";
import { useState } from "react";
import styles from "../styles/cv.module.css";

const Cv = () => {
  const [cvData, setCvData] = useState(cvInfo);

  return (
    <section className={styles.cvAppContainer}>
      <aside className={styles.cvInfoContainer}>
        <CvInfo cvData={cvData} setCvData={setCvData} />
      </aside>
      <main className={styles.cvPreviewContainer}>
        <CvPreview cvInfo={cvData} />
      </main>
    </section>
  );
};
export default Cv;
