import React from "react";

export default function PrimaryButton({
  type = "submit",
  label,
  bgColor = "bg-blue-600",
}) {
  return (
    <button
      type={type}
      className={`w-full ${bgColor}  text-white py-3 px-4 rounded-xl font-semibold hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 transition-all duration-300 transform hover:scale-105`}
    >
      {label}
    </button>
  );
}
