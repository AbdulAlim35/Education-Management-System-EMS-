import axiosClient from "@/api/httpClient";

const classService = {
  class: async (data) => {
    await axiosClient.post("auth/class/create", {
      ...data,
    });
  },
};

export default classService;
