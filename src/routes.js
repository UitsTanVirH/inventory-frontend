
import Index from "views/Index.js";
import Attendance from "views/examples/Tables.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    // icon: "ni ni-search text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/attendance",
    name: "Attendance",
    // icon: "ni ni-planet text-blue",
    component: Attendance,
    layout: "/admin"
  },
  {
    // path: "/maps",
    name: "Employees",
    // icon: "ni ni-pin-3 text-orange",
    // component: Maps,
    layout: "/admin"
  },
  {
    name: "Leaves",
    // icon: "ni ni-single-02 text-yellow",
    // component: Profile,
    layout: "/admin"
  },
  {
    // path: "/tables",
    name: "Expense",
    // icon: "ni ni-bullet-list-67 text-red",
    // component: Tables,
    layout: "/admin"
  },
  {
    // path: "/login",
    name: "Notice",
    // icon: "ni ni-key-25 text-info",
    // component: Login,
    layout: "/auth"
  },
  {
    // path: "/register",
    name: "Departments",
    // icon: "ni ni-circle-08 text-pink",
    // component: Register,
    layout: "/auth"
  }
];
export default routes;
