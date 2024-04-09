import InputField from "../../InputField";
import personalDetailsData from "./personalDetailsData";

const PersonalDetails = () => {
    return (
        <section className="">
            <h3>Personal Details</h3>
            <form>
                {personalDetailsData.map((input) => {
                    {
                        return input.type === "textarea" ? (
                            <label key={input.id}>
                                {input.label}:
                                {input.required ? "*" : " (optional)"}
                                <textarea key={input.id} {...input} />
                            </label>
                        ) : (
                            <InputField key={input.id} {...input} />
                        );
                    }
                })}
            </form>
        </section>
    );
};
export default PersonalDetails;
