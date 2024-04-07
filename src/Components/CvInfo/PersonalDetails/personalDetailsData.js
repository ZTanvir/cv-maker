const personalDetailsData = [
    {
        id: crypto.randomUUID(),
        label: "Wanted Job Title",
        type: "text",
        name: "profession",
        placeHolder: "e.g. Teacher",
        isRequired: true,
    },
    {
        id: crypto.randomUUID(),
        label: "First Name",
        type: "text",
        name: "fname",
        placeHolder: "",
        isRequired: true,
    },
    {
        id: crypto.randomUUID(),
        label: "Last Name",
        type: "text",
        name: "lname",
        placeHolder: "",
        isRequired: true,
    },
    {
        id: crypto.randomUUID(),
        label: "Professional Summary",
        type: "text",
        name: "jobSummary",
        placeHolder:
            "e.g. Passionate science teacher with 8+ years of experience and a track record of ...",
        isRequired: true,
    },
];
export default personalDetailsData;
