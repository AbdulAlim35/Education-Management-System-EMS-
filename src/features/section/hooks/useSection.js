import { useForm } from "react-hook-form";
import sectionService from "../service/sectionService";
import { useEffect, useState } from "react";
import classService from "../../class/service/classService";
const useSection = () => {
  const form = useForm();
  const [user, setUser] = useState([]);
  const [outh, setOuth] = useState([]);
  const sectionList = async () => {
    try {
      const list = await sectionService.sectionShow();
      setUser(list);
    } catch (error) {}
  };
  const classList = async () => {
    try {
      const res = await classService.classShow();
      setOuth(res);
    } catch (error) {}
  };

  useEffect(() => {
    sectionList();
    classList();
  }, []);
  const sectinState = {
    form,
    user,
    outh,
  };

  const action = {
    onSubmit: async (data) => {
      try {
        await sectionService.section(data);
        sectionList();
        form.setValue("model", false);
        form.reset();
      } catch (error) {}
    },
    onUpdate: async (data) => {
      try {
        const { _id, ...other } = data;
        await sectionService.sectionUpdate(_id, other);
        form.setValue("model", false);
        form.reset();
        sectionList();
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
        await sectionService.sectionDelect(_id);
        sectionList();
      } catch (error) {
        console.error(error);
      }
    },
  };

  return {
    form,
    action,
    user,
    sectinState,
  };
};
export default useSection;
