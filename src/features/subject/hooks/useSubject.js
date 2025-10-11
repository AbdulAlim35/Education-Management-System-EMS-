import { useForm } from "react-hook-form";
import subjectService from "../service/subjectService";
import { useEffect, useState } from "react";
import classService from "../../class/service/classService";

const useSubject = () => {
  const form = useForm();
  const [show, setShow] = useState([]);
  const [list, setList] = useState([]);
  const classList = async () => {
    try {
      const res = await classService.classShow();
      setShow(res);
    } catch (error) {}
  };
  const subjectList = async () => {
    try {
      const show = await subjectService.subjectShow();
      setList(show);
    } catch (error) {}
  };

  useEffect(() => {
    classList();
    subjectList();
  }, []);

  const sectinState = {
    form,
    show,
  };

  const action = {
    onSubmit: async (data) => {
      try {
        await subjectService.subject(data);
        subjectList();
        form.setValue("model", false);
        form.reset();
      } catch (error) {}
    },
    onUpdate: async (data) => {
      try {
        const { _id, ...other } = data;
        await subjectService.subjectUpdate(_id, other);
        subjectList();
        form.setValue("model", false);
        form.reset();
      } catch (error) {
        servierValidataionError(error, form);
      }
    },
    onEdit: (card) => {
      form.reset(card);
      form.setValue("model", true);
    },
    onDelect: async (_id) => {
      try {
        await subjectService.subjectDelect(_id);
        subjectList();
      } catch (error) {
        console.error(error);
      }
    },
  };
  return {
    form,
    action,
    sectinState,
    list,
  };
};
export default useSubject;
