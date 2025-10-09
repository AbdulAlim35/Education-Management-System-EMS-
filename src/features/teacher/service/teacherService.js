import axiosClient from "@/api/httpClient";

const teacherService = {
  teacher: async (data) => {
    await axiosClient.post("auth/teacher/create", { ...data });
  },
  teacherShow: async (data) => {
     const list = await axiosClient.get("auth/teacher", {...data})
     return list.data.data
  },
  teacherUpdate: async (id, data) => {
    const update = await axiosClient.put(`auth/teacher/update/${id}`, data);
    return update.data.data
  },
  teacherDelect: async (id) => {
    await axiosClient.delete(`auth/teacher/delete/${id}`)
  }
  
};
export default teacherService;
