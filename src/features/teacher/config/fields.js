const fields = () => {
  return [
    {
      label: "Name",
      placeholder: "Enter your name",
      type: "text",
      required: "name  is required",
      name: "name",
      colSpan: "col-span-12",
    },
    {
      label: "Email",
      placeholder: "Enter your email",
      type: "text",
      required: "email  is required",
      name: "email",
      colSpan: "col-span-12",
    },
    {
      label: "Phone Number",
      placeholder: "Enter your number",
      type: "text",
      required: "number  is required",
      name: "phone",
      colSpan: "col-span-12",
    },
    {
      label: "Submit",
      type: "button",
      action: "submit",
      colSpan: "col-span-12",
    },
  ];
};
export default fields;
