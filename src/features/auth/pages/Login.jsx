import FormLayout from "@/components/share/FormLayout";
import fieldsData from "../config/fields";
import useAuth from "../hooks/useAuth";
import { IoBookOutline } from "react-icons/io5";
function Login() {
  const formData = useAuth();
  return (
    <div
      id="login-page"
      className="min-h-screen flex items-center justify-center bg-blue-500 from-primary-600 to-primary-800"
    >
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="text-center mb-3">
            <div className="w-20 h-20 text-white text-4xl  bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <IoBookOutline />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Admin Login</h2>
            <p className="text-gray-600 mt-2">Student Management System</p>
          </div>
          <FormLayout formData={formData} fields={fieldsData} />
          <div className="flex flex-row  space-x-4 mt-1">
             <p className="text-gray-600 mt-2">Email:admin@gmail.com</p>
             <p className="text-gray-600 mt-2">Password:123456</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Login;
