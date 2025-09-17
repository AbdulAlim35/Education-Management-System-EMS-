export default function InputText({
  label,
  placeholder,
  type = "text",
  rows,
  ...props
}) {
  return (
    <>
      {label && (
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
        </label>
      )}

      <input
        {...props}
        type={type}
        rows={rows}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
        placeholder={placeholder}
      />
    </>
  );
}
