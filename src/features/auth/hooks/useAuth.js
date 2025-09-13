import { useForm } from "react-hook-form";
const useAuth = () => {
  const formControler = useForm();

  return {
    form: formControler,
    onSubmit: (data) => {
            console.log(data);
    },
  };
};
export default useAuth;
