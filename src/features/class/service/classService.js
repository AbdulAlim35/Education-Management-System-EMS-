import axiosClient from "@/api/httpClient";

const classService = {
  class: async (data) => {
    await axiosClient.post("auth/class/create", {
      ...data,
    });
  },
  classShow: async (data) => {
    const list = await axiosClient.get("auth/class", {...data});
    return list.data.data;
  },
  classUpdate: async (id, data) => {
    const res = await axiosClient.put(`/auth/class/update/${id}`, data);
    return res.data.data;
  },
  classDelecte: async (id) => {
    await axiosClient.delete(`/auth/class/delete/${id}`);
  },
};

export default classService;
