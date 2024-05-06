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
            <form className="personalDetailsForm">
                {personalDetailsData.map((input) => (
                    <InputField
                        key={input.id}
                        {...input}
                        value={personalDetails[input.name]}
                        onChange={inputOnchange}
                    />
                ))}
            </form>
        </section>
    );
};
export default PersonalDetails;
