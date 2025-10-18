import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
const tableConfig = (action) => {
  return [
    { key: "name", label: "Class Name" },
    {
      key: "action",
      label: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            className="font-medium text-yellow-600 hover:text-yellow-900 py-1 px-1 rounded-lg transition-colors cursor-pointer"
            onClick={() => {
              action.onEdit(row);
            }}
          >
           <FaEdit />
          </button>
          <button
            className="font-medium text-red-600 hover:text-red-900 py-1 px-1 rounded-lg  transition-colors cursor-pointer"
            onClick={() => {
              action.onDelecte(row._id);
            }}
          >
            <FaTrash />
          </button>
        </div>
      ),
    },
  ];
};

export default tableConfig;
