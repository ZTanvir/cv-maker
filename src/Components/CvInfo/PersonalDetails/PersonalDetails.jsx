import { useState } from "react";
import InputField from "../../InputField";
import personalDetailsData from "./personalDetailsData";
import styles from "../../../styles/personalDetails.module.css";

const PersonalDetails = ({
    cvData,
    updateCvData,
    resetPersonalDetailsForm,
    loadPersonalDetailsForm,
}) => {
    const [personalDetails, setPersonalDetails] = useState({
        fname: "Josephine",
        lname: "Mayers",
        profession: "Front end developer",
        jobSummary:
            "As a Front-End Developer, I am the architect of your website's user experience. I also translate designs into clean, functional code using HTML, CSS, and JavaScript",
    });

    const handleClearBtn = () => {
        setPersonalDetails({
            fname: "",
            lname: "",
            profession: "",
            jobSummary: "",
        });
    };

    const handleLoadBtn = () => {
        setPersonalDetails({
            fname: "Josephine",
            lname: "Mayers",
            profession: "Front end developer",
            jobSummary:
                "As a Front-End Developer, I am the architect of your website's user experience. I also translate designs into clean, functional code using HTML, CSS, and JavaScript",
        });
    };
    // save user input from profession,first name,last name
    const inputOnchange = (event) => {
        setPersonalDetails({
            ...personalDetails,
            [event.target.name]: event.target.value,
        });
        // As react update data in next render
        // To get the update data instant
        let personalInfo = {
            ...personalDetails,
            [event.target.name]: event.target.value,
        };

        updateCvData({
            ...cvData,
            personal_details: {
                ...cvData.personal_details,
                ...personalInfo,
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
            <button
                ref={resetPersonalDetailsForm}
                onClick={handleClearBtn}
                hidden
            >
                Clear
            </button>
            <button
                ref={loadPersonalDetailsForm}
                onClick={handleLoadBtn}
                hidden
            >
                Load
            </button>
        </section>
    );
};
export default PersonalDetails;
