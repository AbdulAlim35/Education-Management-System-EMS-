import React from "react";

export default function InputCheckbox({ label, id, ...otherProps }) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        {...otherProps}
        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
      />
      <label htmlFor={id} className="ml-2 block text-sm text-gray-700">
        {label}
      </label>
    </div>
  );
}
