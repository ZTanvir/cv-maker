const OPTIONS = [
    {
        label: "Beginner",
        value: "1",
    },
    {
        label: "Intermediate",
        value: "2",
    },
    {
        label: "Skillfull",
        value: "3",
    },
    {
        label: "Experienced",
        value: "4",
    },
    {
        label: "Expert",
        value: "5",
    },
];

const SkillFormData = [
    {
        id: crypto.randomUUID(),
        label: "Skill",
        type: "text",
        name: "skill",
        placeholder: "e.g. Microsoft Word",
        require: true,
    },
    {
        id: crypto.randomUUID(),
        label: "Level",
        type: "select",
        name: "level",
        options: OPTIONS,
        require: true,
        placeholder: "",
    },
];

export default SkillFormData;
