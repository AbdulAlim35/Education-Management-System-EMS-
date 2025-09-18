import { useForm } from "react-hook-form";
import authService from "../service/authService";
import { useNavigate } from "react-router-dom";
import { servierValidataionError } from "@/utils/Helper";
import toast from "react-hot-toast";
const useAuth = () => {
  const formControler = useForm();
  const navigate = useNavigate();

  return {
    form: formControler,
    onSubmit: async (data) => {
      try {
        const response = await authService.login(data);
        // Save token in localStorage (or cookies)
        localStorage.setItem("token", response.token);
        navigate("/auth/dashboard");
        toast.success("Login Successfully!");
      } catch (error) {
        servierValidataionError(error, formControler);
      }
    },
  };
};
export default useAuth;
