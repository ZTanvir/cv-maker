import { useState } from "react";
import InputField from "../../InputField";
import personalDetailsData from "./personalDetailsData";

const PersonalDetails = () => {
    const [personalDetails, setPersonalDetails] = useState({
        profession: "",
        fname: "",
        lname: "",
        jobSummary: "",
    });

    // save user input from the text area
    const textareaOnchange = (event) => {
        setPersonalDetails({
            ...personalDetails,
            jobSummary: event.target.value,
        });
    };

    // save user input from profession,first name,last name
    const inputOnchange = (event) => {
        setPersonalDetails({
            ...personalDetails,
            [event.target.name]: event.target.value,
        });
    };

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
                                <textarea
                                    key={input.id}
                                    {...input}
                                    value={personalDetails[input.name]}
                                    onChange={textareaOnchange}
                                />
                            </label>
                        ) : (
                            <InputField
                                key={input.id}
                                {...input}
                                value={personalDetails[input.name]}
                                onChange={inputOnchange}
                            />
                        );
                    }
                })}
            </form>
        </section>
    );
};
export default PersonalDetails;
