import icon from "@/utils/iconMap";
const sidebarMenu = () => {
  return [
    {
      label: "Dashboard",
      path: "/auth/dashboard",
      icon: icon.TbLayoutDashboardFilled,
    },
    {
      label: "Class",
      path: "/auth/class",
      icon: icon.FaSchool,
    },
    {
      label: "Section",
      path: "/auth/section",
      icon: icon.FaUserFriends,
    },
     {
      label: "Student",
      path: "/auth/student",
      icon: icon.FaUser,
    },
    {
      label: "Teachers",
      path: "/teachers",
      icon: icon.FaUserTie,
    },
  ];
};

export default sidebarMenu;
