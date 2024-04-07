/* In front user will see
 *Personal Details
 *Education
 *Professional Experience
 *Contract
 *Skills
 form fields
 */
import InputField from "../InputField";

const CvInfo = () => {
    return (
        <section className="cvInfo">
            <InputField
                label="Full Name"
                type="text"
                placeholder="Full name"
                name="fullName"
                isRequired={true}
            />
        </section>
    );
};
export default CvInfo;
