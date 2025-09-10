import FormLayout from "@/components/share/FormLayout";
import fieldsData from "./config/fields";

function Login() {
  return (
    <div
      id="login-page"
      className="min-h-screen flex items-center justify-center bg-blue-500 from-primary-600 to-primary-800"
    >
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-3">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Admin Login</h2>
            <p className="text-gray-600 mt-2">Student Management System</p>
          </div>

          <FormLayout fields={fieldsData} />

          <div className="mt-6 text-center text-sm text-gray-600">
            Demo credentials: admin / password
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
