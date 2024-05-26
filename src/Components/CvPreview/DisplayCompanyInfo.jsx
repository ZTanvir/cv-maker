const DisplayCompanyInfo = ({ companyDetails }) => {
    const startDate = companyDetails.startDate;
    const endDate = companyDetails.endDate;
    const companyName = companyDetails.institute;
    const designation = companyDetails.designation;
    const description = companyDetails.description;

    return (
        <section>
            {companyDetails.visibility ? (
                <div>
                    <div>
                        <p>
                            {startDate} - {endDate}
                        </p>
                        <p>{companyName}</p>
                    </div>
                    <div>
                        <p>{designation}</p>
                        <p>{description}</p>
                    </div>
                </div>
            ) : null}
        </section>
    );
};
export default DisplayCompanyInfo;
