import { useForm } from "react-hook-form";
import teacherService from "../service/teacherService";
import { useEffect, useState } from "react";

const useTeacher = () => {
  const form = useForm();
  const [list, setList] = useState([]);

  const teacherList = async () => {
    try {
      const res = await teacherService.teacherShow();
      setList(res);
    } catch (error) {}
  };
  useEffect(() => {
    teacherList();
  }, []);

  // const sectinState = {
  //   list,
  // };

  const action = {
    onSubmit: async (data) => {
      try {
        await teacherService.teacher(data);
         teacherList();
        form.setValue("model", false);
        form.reset();
      } catch (error) {}
    },
    onUpdate: async (data) => {
     try {
      const {_id, ...other} = data;
      await teacherService.teacherUpdate(_id, other)
       teacherList();
        form.setValue("model", false);
        form.reset();
     } catch (error) {
      servierValidataionError(error, form);
     }
    },
    onEdit: (card) => {
      form.reset(card)
      form.setValue("model", true)
    },
    onDelect: async (_id) => {
     try {
       await teacherService.teacherDelect(_id)
       teacherList();
     } catch (error) {
       console.error(error);
     }
    }
  };

  return {
    form,
    action,
   list,
  };
};
export default useTeacher;
