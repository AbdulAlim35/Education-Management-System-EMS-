import React from "react";
import { useForm } from "react-hook-form";
import classService from "../service/classService";
import { useEffect, useState } from "react";
import axiosClient from "@/api/httpClient";
import { servierValidataionError } from "@/utils/Helper";
const useClass = () => {
  const form = useForm();
  const [user, setUser] = useState([]);
  const clissList = async () => {
    try {
      const res = await classService.classShow(); 
      setUser(res);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    clissList();
  }, []);
  const action = {
    onSubmit: async (data) => {
      try {
        await classService.class(data);
        clissList();
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
        clissList();
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
        const req = await classService.classDelecte(_id);
        clissList();
      } catch (error) {
        console.error(error);
      }
    },
  };
  return {
    form,
    user,
    action,
  };
};

export default useClass;
