import { useForm } from "react-hook-form";
import studentService from "../service/studentService";
import { useEffect, useState } from "react";
import classService from "../../class/service/classService";
import sectionService from "../../section/service/sectionService";

const useStudent = () => {
  const form = useForm();
  const [list, setList] = useState([]);
  const [show, setShow] = useState([]);
  const [ref, setRef] = useState([]);

  const classList = async () => {
    try {
      const res = await classService.classShow();
      setList(res);
    } catch (error) {}
  };
  const sectionList = async () => {
    try {
      const list = await sectionService.sectionShow();
      setShow(list);
    } catch (error) {}
  };
  const studentList = async () => {
    try {
      const show = await studentService.studentShow();

      setRef(show);
    } catch (error) {}
  };

  useEffect(() => {
    classList();
    sectionList();
    studentList();
  }, []);

  const sectinState = {
    form,
    list,
    show,
    ref,
  };
  const action = {
    onSubmit: async (data) => {
      
      try {
        await studentService.student(data);
        studentList();
        form.setValue("model", false);
        form.reset();
      } catch (error) {}
    },
    onUpdate: async (data) => {
      try {
        const { _id, ...other } = data;
        await studentService.studentUpdate(_id, other);
        studentList();
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
        await studentService.studentDelect(_id);
        studentList();
      } catch (error) {
        console.error(error);
      }
    },
  };
  return {
    form,
    sectinState,
    action,
    ref,
  };
};

export default useStudent;
