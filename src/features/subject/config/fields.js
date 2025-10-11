const fields = (sectinState) => {
  return [
    {
      label: "Class name",
      placeholder: "Select class name",
      type: "dropdown",
      options: sectinState.show?.map((cls) => ({
        value: cls._id,
        label: cls.name,
      })),
      name: "class_id",
      colSpan: "col-span-12",
    },
    {
      label: "Subject Name",
      placeholder: "Enter your subject",
      type: "text",
      required: "subject  is required",
      name: "name",
      colSpan: "col-span-12",
    },
    {
      label: "Subject Code",
      placeholder: "Enter your code",
      type: "text",
      required: "Subject code  is required",
      name: "code",
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
