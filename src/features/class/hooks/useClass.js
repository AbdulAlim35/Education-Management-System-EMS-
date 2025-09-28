import React from "react";
import { useForm } from "react-hook-form";
import classService from "../service/classService";
import { useEffect, useState } from "react";
import axiosClient from "@/api/httpClient";
const useClass = () => {
  const form = useForm();
  const [user, setUser] = useState([]);

  const fatchData = async () => {
    const ras = await axiosClient.get("auth/class");
    setUser(ras.data.data);
  };
  useEffect(() => {
    fatchData();
  }, []);
  return {
    form,
    user,
    onSubmit: async (data) => {
      try {
        await classService.class(data);
        form.setValue("model", false);
        form.reset();
      } catch (error) {}
    },
  };
};

export default useClass;
