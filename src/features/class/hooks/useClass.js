import React from "react";
import { useForm } from "react-hook-form";
import classService from "../service/classService";

const useClass = () => {
  const form = useForm();
  return {
    form,
    onSubmit: async (data) => {
      try {
       await classService.class(data)
        form.setValue("model", false);
        form.reset();
      } catch (error) {}
    },
  };
};

export default useClass;
