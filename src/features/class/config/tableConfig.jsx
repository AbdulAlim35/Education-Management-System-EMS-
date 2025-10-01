const tableConfig = (action) => {
  return [
    { key: "name", label: "Class Name" },
    {
      key: "action",
      label: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button className="text-blue-600 hover:text-blue-900 cursor-pointer"
          onClick={() => { console.log("Row clicked:", row); action.onView(row)}}
          >
            View
          </button>
          <button
            className="text-yellow-600 hover:text-yellow-900 cursor-pointer"
            onClick={() => {
              action.onEdit(row);
            }}
          >
            Edit
          </button>
          <button
            className="text-red-600 hover:text-red-900 cursor-pointer"
            onClick={() => {
              action.onDelecte(row._id);
            }}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];
};

export default tableConfig;
