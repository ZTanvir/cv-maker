const CvData = {
    personal_details: {
        full_name: "Josephine Meyers",
        profession: "Artist",
        description:
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
            degree: "B.S.C",
            startDate: "2014-02-09",
            endDate: "2014-02-09",
            location: "",
            visibility: true,
        },
        {
            id: crypto.randomUUID(),
            institute: "Dhaka city",
            degree: "S.S.C",
            startDate: "2014-02-09",
            endDate: "2014-02-09",
            location: "dhaka bd",
            visibility: true,
        },
    ],
    experience: [],
};
export default CvData;
