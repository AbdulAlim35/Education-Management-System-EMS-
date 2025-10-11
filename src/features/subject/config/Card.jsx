const Card = (action) => {
  return [
    {
      key: "class_id",
      label: "Class Name:",
      cell: (card) => card.class_id?.name || "-",
    },
    { key: "name", label: "Subject Name:" },
    { key: "code", label: "Subject Code:" },
     {
     
      cell: (card) => (
        <div className="mt-5 flex justify-between ">
          <button
            className=" bg-gray-200 hover:bg-gray-300  font-medium text-yellow-600 hover:text-yellow-900 py-2 px-4 rounded-lg transition-colors cursor-pointer"
            onClick={() => {
              action.onEdit(card);
            }}
          >
            Edit
          </button>
          <button
            className="bg-gray-200 font-medium text-red-600 hover:text-red-900 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer"
            onClick={() => {
              action.onDelect(card._id);
            }}
          >
            Delect
          </button>
        </div>
      ),
    },
  ];
};
export default Card;
