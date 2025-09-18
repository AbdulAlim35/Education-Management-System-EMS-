import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { RiCloseLargeLine } from "react-icons/ri";


export default function PageLayout({children, title, description, buttonLabel, form, header}) {
   const [open, setOpen] = useState(false);
  return (
    <div id="students-section" className="content-section p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">
         { description }
          </p>
        </div>
     
         <button
        id="add-student-btn"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 cursor-pointer transition-colors flex items-center space-x-2 shadow-lg"
        onClick={() => setOpen(true)}
      >
        <IoMdAdd size={20} />
        <span>{buttonLabel}</span>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className={"relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 ease-out"}
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b p-5">
              <h2 className="text-lg font-semibold text-gray-800">
               {header}
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
              >
                <RiCloseLargeLine />
              </button>
            </div>

            {/* Scrollable Form */}
            <div className="max-h-[70vh] overflow-y-auto p-6">
              {form}
            </div>
          </div>
        </div>
      )}
      </div>
      {children}
    </div>
  );
}
