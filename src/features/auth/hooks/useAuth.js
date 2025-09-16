import { useForm } from "react-hook-form";
import axiosClient from "@/api/httpClient";
import { useNavigate } from "react-router-dom";
const useAuth = () => {
  const formControler = useForm();
  const navigate =useNavigate()
 
  return {
    form: formControler,
    onSubmit: async (data) => {
      try {
        const req = await axiosClient.post("login", {
          ...data
        });
          
 
      //  const { token, user } = req.data;
      // Save token in localStorage (or cookies)
      localStorage.setItem("token", req.data.data.token);
// 
        // navigate('/auth/dashboard')

      } catch (error) {
         if (error.response?.status === 401) {
      formControler.setError("email", {
        type: "manual",
        message: "Email Address invalid"
      });
      // formControler.setError("password", {
      //   type: "manual",
      //   message: " Password Address invalid "
      // });
      }
    }
   
  }
  }
};
export default useAuth;
