const filledCvData = {
    personal_details: {
        fname: "Josephine Ali",
        lname: "Mayers",
        profession: "Front end developer",
        jobSummary:
            "As a Front-End Developer, I am the architect of your website's user experience. I also translate designs into clean, functional code using HTML, CSS, and JavaScript",
    },
    education: [
        {
            id: crypto.randomUUID(),
            institute: "University of Oxford",
            degree: "MS in CSE",
            startDate: "2023-01-01",
            endDate: "",
            location: "",
            visibility: true,
        },
        {
            id: crypto.randomUUID(),
            institute: "Stanford university",
            degree: "B.S.C in C.S.E",
            startDate: "2019-01-01",
            endDate: "2022-12-31",
            location: "",
            visibility: true,
        },
    ],
    experience: [
        {
            id: crypto.randomUUID(),
            visibility: true,
            institute: "Amazon",
            designation: "React Developer",
            startDate: "2024-01-01",
            endDate: "",
            location: "Atlanta",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis risus faucibus, ultricies arcu in, gravida metus. Nulla nulla ex, auctor id congue et, eleifend a libero.",
        },
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
            skill: "Photoshop",
            level: "4",
        },
        {
            id: crypto.randomUUID(),
            visibility: true,
            skill: "Indesign",
            level: "3",
        },
        {
            id: crypto.randomUUID(),
            visibility: true,
            skill: "Illustrator",
            level: "3",
        },
        {
            id: crypto.randomUUID(),
            visibility: true,
            skill: "After Effects",
            level: "2",
        },
    ],
};
export default filledCvData;
