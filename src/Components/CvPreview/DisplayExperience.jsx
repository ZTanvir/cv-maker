import DisplayCompanyInfo from "./DisplayCompanyInfo";

const DisplayExperience = ({ cvData }) => {
    const companies = cvData.experience;
    return (
        <section>
            <h2>Experience</h2>
            {companies.map((company) => (
                <DisplayCompanyInfo key={company.id} companyDetails={company} />
            ))}
        </section>
    );
};
export default DisplayExperience;
