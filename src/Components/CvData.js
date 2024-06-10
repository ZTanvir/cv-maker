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
            designation: "Senior product manager",
            startDate: "2008-06-23",
            endDate: "1975-09-21",
            location: "Consectetur voluptat",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis risus faucibus, ultricies arcu in, gravida metus. Nulla nulla ex, auctor id congue et, eleifend a libero.",
        },
    ],
    contract: [
        {
            id: crypto.randomUUID(),
            visibility: true,
            phoneNumber: "+1 (195) 436-2106",
            email: "nohis@mailinator.com",
            address: "Ut suscipit aliquid",
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
