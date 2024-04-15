/* In front user will see
 *Personal Details
 *Education
 *Professional Experience
 *Contract
 *Skills
 form fields
 */
import PersonalDetails from "./PersonalDetails/PersonalDetails";
import ToggleSection from "./UserInfo/ToggleSection";

const CvInfo = () => {
    return (
        <section className="cvInfo">
            <PersonalDetails />
            <ToggleSection
                sectionIcon="school"
                sectionName="Education"
            ></ToggleSection>
        </section>
    );
};
export default CvInfo;
