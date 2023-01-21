
import Index from "views/Index.js";
import Attendance from "views/examples/Tables.js";
import Profile from "views/examples/Profile";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    // icon: "ni ni-search text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/inventory",
    name: "Inventory",
    // icon: "ni ni-planet text-blue",
    component: Attendance,
    layout: "/admin"
  },
  {
    path: "/order",
    name: "Order",
    // icon: "ni ni-pin-3 text-orange",
    component: Profile,
    layout: "/admin"
  }
  
];
export default routes;
