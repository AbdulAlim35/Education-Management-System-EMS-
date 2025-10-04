const fields = (sectinState) => {
  return [
    {
      label: "Section Name",
      placeholder: "Enter your section",
      type: "text",
      required: "section  is required",
      name: "name",
      colSpan: "col-span-12",
    },
    {
      label: "Capacity",
      placeholder: "Enter your capacity",
      type: "text",
      required: "capacity  is required",
      name: "capacity",
      colSpan: "col-span-12",
    },
    {
      label: "Class name",
      placeholder: "Select class name",
      type: "dropdown",
      options: sectinState.outh?.map((cls) => ({
        value: cls._id,
        label: cls.name,
      })),
      name: "class_id",
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
