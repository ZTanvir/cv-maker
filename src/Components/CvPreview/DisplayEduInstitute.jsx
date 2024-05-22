const DisplayEduInstitute = ({ insituteInfo }) => {
    return (
        <section className={styles.eduInstituteInfo}>
            {insituteInfo.visibility ? (
                <>
                    <p>
                        {insituteInfo.startDate} - {insituteInfo.endDate}
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
