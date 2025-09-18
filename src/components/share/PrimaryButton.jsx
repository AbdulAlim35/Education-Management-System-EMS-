import React from "react";

export default function PrimaryButton({
  type,
  label,
  bgColor = "bg-blue-600",
}) {
  return (
    <button
      type={type}
      className={`w-full ${bgColor}  text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform hover:scale-105`}
    >
      {label}
    </button>
  );
}
