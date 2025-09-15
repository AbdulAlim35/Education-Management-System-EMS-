import { useForm } from "react-hook-form";
import axiosClient from "@/api/httpClient";
const useAuth = () => {
  const formControler = useForm();

  return {
    form: formControler,
    onSubmit: async (data) => {
      try {
        const req = await axiosClient.post("login", {
          ...data
        });
        
      } catch (error) {
        console.error("Error:", error.response);
      }
    },
  };
};
export default useAuth;
