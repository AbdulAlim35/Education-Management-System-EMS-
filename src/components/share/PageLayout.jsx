

export default function PageLayout({children, title, description, buttonLabel}) {
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
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center space-x-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span>{buttonLabel}</span>
        </button>
      </div>
      {children}
    </div>
  );
}
