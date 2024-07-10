const filledCvData = {
    personal_details: {
        fname: "Josephine",
        lname: "Mayers",
        profession: "Front end developer",
        jobSummary:
            "As a Front-End Developer, I am the architect of your website's user experience. I also translate designs into clean, functional code using HTML, CSS, and JavaScript",
    },
    education: [
        {
            id: crypto.randomUUID(),
            institute: "University of Oxford",
            degree: "MS in C.S.E",
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
                "Building user interfaces with React.Working with the Web Development Ecosystem.Optimizing Performance and Experience.",
        },
        {
            id: crypto.randomUUID(),
            visibility: true,
            institute: "Nvidia",
            designation: "Web Designer",
            startDate: "2022-01-01",
            endDate: "2023-12-31",
            location: "Santa Clara, California",
            description:
                "Collaborate with clients and stakeholders to understand their brand identity, target audience, and website goals.Collaborate with back-end developers for API and database integration.Optimize website performance and troubleshoot front-end issues.",
        },
    ],
    contract: [
        {
            id: crypto.randomUUID(),
            visibility: true,
            phoneNumber: "+1 (195) 436-2106",
            email: "josephine@gmail.com",
            address: "Suite 885 7537 Kuhn Lights, Deckowton, TX 02552-6954",
        },
    ],
    skills: [
        {
            id: crypto.randomUUID(),
            visibility: true,
            skill: "React",
            level: "4",
        },
        {
            id: crypto.randomUUID(),
            visibility: true,
            skill: "Redux",
            level: "3",
        },
        {
            id: crypto.randomUUID(),
            visibility: true,
            skill: "Playwright",
            level: "3",
        },
        {
            id: crypto.randomUUID(),
            visibility: true,
            skill: "Tailwind",
            level: "2",
        },
    ],
};
export default filledCvData;
