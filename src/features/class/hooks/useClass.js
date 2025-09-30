import React from "react";
import { useForm } from "react-hook-form";
import classService from "../service/classService";
import { useEffect, useState } from "react";
import axiosClient from "@/api/httpClient";
import { servierValidataionError } from "@/utils/Helper";
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

  const action = {
    onSubmit: async (data) => {
      try {
        await classService.class(data);
        form.setValue("model", false);
        form.reset();
      } catch (error) {}
    },

    onUpdate: async (data) => {
      try {
        const { _id, ...other } = data;
        const res = await classService.classUpdate(_id, other);
        form.setValue("model", false);
        form.reset();
           fatchData();
      } catch (error) {
        servierValidataionError(error, form);
      }
    },

    onEdit: (row) => {
      form.reset(row);
      form.setValue("model", true);
    },
    onDelecte: async (_id) => {
      try {
      const req =  await classService.classDelecte(_id)
       fatchData();
      } catch (error) {
         console.error(error);
      }
    },
    // onDelecte: (row) =>{
    //   fatchData(row);
    // }
  };
  return {
    form,
    user,
    action,
  };
};

export default useClass;
