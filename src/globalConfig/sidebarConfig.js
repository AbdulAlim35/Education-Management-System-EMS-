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
      icon: icon.FaUserFriends,
    },
    {
      label: "Students",
      path: "/students",
      icon: icon.FaUserFriends,
    },
    {
      label: "Teachers",
      path: "/teachers",
      icon: icon.FaUserTie,
    },
  ];
};

export default sidebarMenu;
