import axiosClient from "@/api/httpClient";

const studentService = {
  student: async (data) => {
    await axiosClient.post("auth/student/create", { ...data });
  },
  studentShow: async (data) => {
    const list = await axiosClient.get("auth/student", { ...data });
    return list.data.data;
  },
  studentUpdate: async (id, data) => {
    const update = await axiosClient.put(`auth/student/update/${id}`, data);
    return update.data.data;
  },
  studentDelect: async (id) => {
    await axiosClient.delete(`auth/student/delete/${id}`);
  },
};

export default studentService;
