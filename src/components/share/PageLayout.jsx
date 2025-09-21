import { IoMdAdd } from "react-icons/io";

export default function PageLayout({
  children,
  title,
  description,
  buttonLabel,
  form,
}) {
  return (
    <div id="students-section" className="content-section p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>

        <button
          id="add-student-btn"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 cursor-pointer transition-colors flex items-center space-x-2 shadow-lg"
          onClick={() => form.setValue("model", true)}
        >
          <IoMdAdd size={20} />
          <span>{buttonLabel}</span>
        </button>
      </div>
      {children}
    </div>
  );
}
