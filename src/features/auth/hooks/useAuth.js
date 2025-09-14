import { useForm } from "react-hook-form";
import axios from "axios";
const useAuth = () => {
  const formControler = useForm();

  return {
    form: formControler,
    onSubmit: async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/login",
          {
            email: "akrmma@gmail.com",
            password: "123456",
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    },
  };
};
export default useAuth;
