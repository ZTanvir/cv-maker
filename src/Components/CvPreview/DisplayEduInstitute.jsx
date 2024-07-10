const DisplayEduInstitute = ({ insituteInfo }) => {
    const formateDate = (date) => date.split("-").join("/");
    const startDate = formateDate(insituteInfo.startDate);
    const endDate = formateDate(insituteInfo.endDate);

    return (
        <section>
            {insituteInfo.visibility ? (
                <>
                    <p>
                        {startDate} - {endDate ? endDate : "Ongoing"}
                    </p>
                    <p>{insituteInfo.degree}</p>
                    <p>{insituteInfo.institute}</p>
                    {insituteInfo.location ? (
                        <p>{insituteInfo.location}</p>
                    ) : null}
                </>
            ) : null}
        </section>
    );
};

export default DisplayEduInstitute;
