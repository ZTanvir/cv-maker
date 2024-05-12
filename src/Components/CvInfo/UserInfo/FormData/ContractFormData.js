const ContractFormData = [
    {
        id: crypto.randomUUID(),
        label: "Phone",
        type: "tel",
        name: "phoneNumber",
        placeholder: "+880",
        require: true,
    },
    {
        id: crypto.randomUUID(),
        label: "Email",
        type: "mail",
        name: "email",
        placeholder: "Example@gmail.com",
        require: true,
    },
    {
        id: crypto.randomUUID(),
        label: "Address",
        type: "text",
        name: "address",
        placeholder: "Street address,Town/City,Zip code",
        require: true,
    },
];

export default ContractFormData;
