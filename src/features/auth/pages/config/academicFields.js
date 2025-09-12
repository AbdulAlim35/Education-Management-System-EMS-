const academicFields = () => {
  return [
    {
      type: "search",
      name: "search",
      placeholder: "Search student...",
      colSpan: 12,
    },
    {
      label: "All Class",
      type: "select",
      name: "filterClass",
      colSpan: 4,
      options: [
        { label: "All", value: "" },
        { label: "Class 10A", value: "10A" },
        { label: "Class 10B", value: "10B" },
        { label: "Class 11A", value: "11A" },
        { label: "Class 11B", value: "11B" },
      ],
    },
      {
      label: "All Status",
      type: "select",
      name: "filterClass",
      colSpan: 4,
      options: [
        { label: "All", value: "" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" }
      ],
    },
    {
      label: "Export csv",
      type: "button",
      action: "submit",
      colSpan: 12,
    },
        {
      label: "Import csv",
      type: "button",
      action: "submit",
      colSpan: 12,
    },
  ];
};
