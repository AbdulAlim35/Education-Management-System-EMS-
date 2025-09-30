import axiosClient from "@/api/httpClient";

const classService = {
  class: async (data) => {
    await axiosClient.post("auth/class/create", {
      ...data,
    });
  },
  classUpdate: async (id, data) => {
    const res = await axiosClient.put(`/auth/class/update/${id}`, data);
    return res.data.data;
  },
};

export default classService;
