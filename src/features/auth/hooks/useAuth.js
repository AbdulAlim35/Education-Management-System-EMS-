import { useForm } from "react-hook-form";
import authService from "../service/authService";
import { replace, useNavigate } from "react-router-dom";
import { servierValidataionError } from "@/utils/Helper";
import toast from "react-hot-toast";
import { useTheme } from '@/context/ThemeContext';
import { useEffect } from "react";
const useAuth = () => {
  const formControler = useForm();
  const navigate = useNavigate();
   const {isAuth, setAuth} = useTheme();
  const action = {
    form: formControler,
    onSubmit: async (data) => {
      try {
        const response = await authService.login(data);
        // Save token in localStorage (or cookies)
        localStorage.setItem("token", response.token);
        setAuth(true)
        navigate("/auth/dashboard");
        toast.success("Login Successfully!");
      } catch (error) {
        servierValidataionError(error, formControler);
      }
    },
  };
  useEffect(() => {
   if (isAuth) {
    navigate("/auth/dashboard",{replace:true})
    
   }
  }, [isAuth])
  

  return {
     form: formControler,
    action,
  };
};
export default useAuth;
