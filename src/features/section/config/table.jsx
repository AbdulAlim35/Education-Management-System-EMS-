import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
const table = (action) => {
  return [
    { key: "name", label: "Section Name" },
    { key: "capacity", label: "Capacity" },
    { key: "class_id", label: "Class Name", cell: (row) => row.class_id?.name || "-"},
    {
      key: "action",
      label: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            className="text-yellow-600 hover:text-yellow-900 text-[19px] cursor-pointer"
            onClick={() => {
              action.onEdit(row)
            }}
          >
            <FaEdit />
          </button>
          <button
            className="text-red-600 hover:text-red-900 text-[19px] cursor-pointer"
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
export default table;
