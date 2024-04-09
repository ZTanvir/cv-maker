const personalDetailsData = [
    {
        id: crypto.randomUUID(),
        label: "Wanted Job Title",
        type: "text",
        name: "profession",
        placeholder: "e.g. Teacher",
        required: true,
    },
    {
        id: crypto.randomUUID(),
        label: "First Name",
        type: "text",
        name: "fname",
        placeholder: "",
        required: true,
    },
    {
        id: crypto.randomUUID(),
        label: "Last Name",
        type: "text",
        name: "lname",
        placeholder: "",
        required: true,
    },
    {
        id: crypto.randomUUID(),
        label: "Professional Summary",
        type: "textarea",
        name: "jobSummary",
        placeholder:
            "e.g. Passionate science teacher with 8+ years of experience and a track record of ...",
        required: true,
    },
];
export default personalDetailsData;
