import { useState } from "react";
import InputField from "../../InputField";
import personalDetailsData from "./personalDetailsData";
import styles from "../../../styles/personalDetails.module.css";

const PersonalDetails = ({ cvData, updateCvData }) => {
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
        updateCvData({
            ...cvData,
            personal_details: {
                ...cvData.personal_details,
                ...personalDetails,
            },
        });
    };

    return (
        <section className={styles.personalDetailSection}>
            <h2>Personal Details</h2>
            <form className={styles.personalDetailsForm}>
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
