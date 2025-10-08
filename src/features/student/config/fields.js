const fields = (sectinState) => {
  return [
    {
      label: "First Name",
      placeholder: "Enter your first",
      type: "text",
      required: "first name  is required",
      name: "first_name",
      colSpan: "col-span-6",
    },
    {
      label: "Last Name",
      placeholder: "Enter your last",
      type: "text",
      required: "last name  is required",
      name: "last_name",
      colSpan: "col-span-6",
    },
    {
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
      required: "email  is required",
      name: "email",
      colSpan: "col-span-6",
    },
    {
      label: "Phone",
      placeholder: "Enter your number",
      type: "text",
      required: "phone  is required",
      name: "phone",
      colSpan: "col-span-6",
    },
    {
      label: "Address",
      placeholder: "Enter your address",
      type: "text",
      required: "address  is required",
      name: "address",
      colSpan: "col-span-6",
    },
    {
      label: "Admison Date",
      placeholder: "Enter your admison",
      type: "date",
      required: "admission  is required",
      name: "admission_date",
      colSpan: "col-span-6",
    },
    {
      label: "Class name",
      placeholder: "Select class name",
      type: "dropdown",
      options: sectinState.list?.map((cls) => ({
        value: cls._id,
        label: cls.name,
      })),
      name: "class_id",
      colSpan: "col-span-12",
    },
    {
      label: "Section name",
      placeholder: "Select section name",
      type: "dropdown",
      options: sectinState.show?.map((sec) => ({
        value: sec._id,
        label: sec.name,
      })),
      name: "section_id",
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
