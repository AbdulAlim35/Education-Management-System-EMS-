import icon from "@/utils/iconMap";
const sidebarMenu = () => {
  return [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: icon.TbLayoutDashboardFilled,
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
