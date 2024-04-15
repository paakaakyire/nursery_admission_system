import {
  MdAppBlocking,
  MdBook,
  MdContactPhone,
  MdDashboard,
  MdHelp,
  MdSettings,
} from "react-icons/md";

export const navbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Courses",
    link: "/courses",
  },
  {
    name: "Gallery",
    link: "/gallery",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const adminSideBarLinks = [
  {
    icon: <MdDashboard />,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <MdBook />,
    name: "Courses",
    path: "/dashboard/courses",
  },
  {
    icon: <MdContactPhone />,
    name: "Contact",
    path: "/dashboard/contact",
  },
  {
    icon: <MdAppBlocking />,
    name: "Blog",
    path: "/dashboard/blog",
  },
  {
    icon: <MdHelp />,
    name: "Help",
    path: "/dashboard/help",
  },
  {
    icon: <MdSettings />,
    name: "Settings",
    path: "/dashboard/settings",
  },
  {
    icon: <MdSettings />,
    name: "Settings",
    path: "/dashboard/settings",
  },
  {
    icon: <MdSettings />,
    name: "Settings",
    path: "/dashboard/settings",
  },
];
