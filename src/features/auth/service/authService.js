import axiosClient from "@/api/httpClient";

const authService = {
  login: async (data) => {
    const req = await axiosClient.post("login", {
      ...data,
    });
    return req.data.data;
  },
};

export default authService;
