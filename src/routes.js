import Profile from "views/examples/Profile";
import Register from "views/examples/Register";

var routes = [
  {
    path: "/inventory",
    name: "Inventory",
    component: Register,
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
