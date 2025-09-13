const tableConfig = () => {
  return {
    columns: [
      { key: "Student", label: "Student" },
      { key: "ID", label: "Student ID" },
      { key: "Class", label: "Class" },
      { key: "Contact", label: "Contact" },
      { key: "Status", label: "Status" },
      { key: "actions", label: "Actions" },
    ],
    data: [
      { Student: "John Doe ", Email: "assadd@gamil.com", StudentID: 1, Class: "10A", Contact: "+1 234 567 8900", Status: "Active" },
      { Student: "Emma Johnson", Email: "ali@gamil.com", StudentID: 2, Class: "11A", Contact: "+1 234 567 8900", Status: "inactive" },
      
    ],
  };
};

export default tableConfig;
