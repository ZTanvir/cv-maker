const EducationFormData = [
    {
        id: crypto.randomUUID(),
        label: "School",
        type: "text",
        name: "institute",
        placeholder: "Enter school / university",
        require: true,
    },
    {
        id: crypto.randomUUID(),
        label: "Degree",
        type: "text",
        name: "degree",
        placeholder: "Enter degree / Field of study",
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
];

export default EducationFormData;
