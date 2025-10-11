import axiosClient from "@/api/httpClient";

const subjectService = {
  subject: async (date) => {
    await axiosClient.post("auth/subject/create", { ...date });
  },
  subjectShow: async (data) => {
    const list = await axiosClient.get("auth/subject", { ...data });
    return list.data.data;
  },
  subjectUpdate: async (id, data) => {
    const update = await axiosClient.put(`auth/subject/update/${id}`, data);
    return update.data.data;
  },
  subjectDelect: async (id) => {
    await axiosClient.delete(`auth/subject/delete/${id}`);
  },
};
export default subjectService;
