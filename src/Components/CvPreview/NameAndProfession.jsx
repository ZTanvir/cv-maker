const NameAndProfession = ({ cvData }) => {
    const personalData = cvData.personal_details;
    const fullName = personalData.fname + " " + personalData.lname;
    const profession = personalData.profession;

    return (
        <section>
            <h2>{fullName}</h2>
            <p>{profession}</p>
        </section>
    );
};

export default NameAndProfession;
