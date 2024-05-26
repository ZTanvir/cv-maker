import styles from "../../styles/CvPreview/displayProfileDetails.module.css";

const DisplayProfileDescription = ({ cvData }) => {
    const jobSummary = cvData.personal_details.jobSummary;

    return (
        <section>
            <h2>Profile</h2>
            <p>{jobSummary}</p>
        </section>
    );
};

export default DisplayProfileDescription;
