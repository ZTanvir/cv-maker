const EducationFormData = [
    {
        id: crypto.randomUUID(),
        label: "Company Name",
        type: "text",
        name: "institute",
        placeholder: "Enter Company Name",
        require: true,
    },
    {
        id: crypto.randomUUID(),
        label: "Position Title",
        type: "text",
        name: "designation",
        placeholder: "Enter Position Title",
        require: true,
    },
    {
        id: crypto.randomUUID(),
        label: "Start Date",
        type: "date",
        name: "startDate",
        placeholder: "Enter start date",
        require: true,
    },
    {
        id: crypto.randomUUID(),
        label: "End date",
        type: "date",
        name: "endDate",
        placeholder: "Enter End Date",
        require: false,
    },
    {
        id: crypto.randomUUID(),
        label: "Location",
        type: "text",
        name: "location",
        placeholder: "Enter Location",
        require: false,
    },
    {
        id: crypto.randomUUID(),
        label: "Description",
        type: "textarea",
        name: "description",
        rows: "5",
        cols: "33",
        placeholder: "Enter Description",
        require: false,
    },
];

export default EducationFormData;
