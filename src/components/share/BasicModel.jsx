import React, { Children } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import FormLayout from "./FormLayout";
export default function BasicModel({ form, header, children, size = "100%" }) {
  return (
    <>
      {form.watch("model") && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className={`"relative bg-white rounded-2xl shadow-2xl w-[${size}] max-w-2xl transform transition-all duration-300 ease-out`}
          >
           
            <div className="flex justify-between items-center border-b p-5">
              <h2 className="text-lg font-semibold text-gray-800">{header}</h2>
              <button
                onClick={() => form.setValue("model", false)}
                className="text-gray-500 hover:text-gray-700 text-2xl cursor-pointer"
              >
                <RiCloseLargeLine />
              </button>
            </div>

        
            <div className="max-h-[70vh] overflow-y-auto p-6">{children}</div>
          </div>
        </div>
      )}
    </>
  );
}
