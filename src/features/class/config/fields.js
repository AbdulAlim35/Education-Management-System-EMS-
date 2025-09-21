// fields.js
const fields = () => {
  return [
    {
      label: "Name",
      placeholder: "Enter your class",
      type: "text",
      required: "class  is required",
      name: "name",
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
