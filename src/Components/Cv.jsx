// In front user will see both form field which will use to get their user information
// and how the information will look in the cv
import CvInfo from "./CvInfo/CvInfo";
import CvPreview from "./CvPreview/CvPreview";

const Cv = () => {
    return (
        <section className="cv-maker">
            <CvInfo />
            <CvPreview />
        </section>
    );
};
export default Cv;
