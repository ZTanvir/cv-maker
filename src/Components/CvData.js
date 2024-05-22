const CvData = {
    personal_details: {
        fname: "Josephine",
        lname: "Mayers",
        profession: "Artist",
        jobSummary:
            "Engineers, as practitioners of engineering, are professionals who invent, design, analyze, build and test machines, complex systems, structures,",
    },
    education: [
        {
            id: crypto.randomUUID(),
            institute: "London City University",
            degree: "H.S.C",
            startDate: "2014-02-09",
            endDate: "2014-02-09",
            location: "",
            visibility: true,
        },
    ],
    experience: [
        {
            id: crypto.randomUUID(),
            visibility: true,
            institute: "Cochran Dawson Plc",
            designation: "Consequatur ex accus",
            startDate: "2008-06-23",
            endDate: "1975-09-21",
            location: "Consectetur voluptat",
            description: "Ut voluptate soluta ",
        },
    ],
    contract: [
        {
            id: crypto.randomUUID(),
            visibility: true,
            phoneNumber: "+1 (195) 436-2106",
            email: "nohis@mailinator.com",
            address: "Ut suscipit aliquid ",
        },
    ],
    skills: [
        {
            id: crypto.randomUUID(),
            visibility: true,
            skill: "Reiciendis labore si",
            level: "4",
        },
    ],
};
export default CvData;
