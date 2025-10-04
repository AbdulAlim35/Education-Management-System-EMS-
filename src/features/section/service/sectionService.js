import axiosClient from "@/api/httpClient";
const sectionService = {
  section: async (data) => {
   await axiosClient.post("auth/section/create", {
      ...data,
    });
  },
  sectionShow: async (data) => {
    const list = await axiosClient.get("auth/section", { ...data });
    return list.data.data;
  },
  sectionUpdate: async (id,data)=>{
    const update = await axiosClient.put(`auth/section/update/${id}`, data)
    return update.data.data
  },
  sectionDelect: async (id) => {
    await axiosClient.delete(`auth/section/delete/${id}`)
  }
};

export default sectionService;
