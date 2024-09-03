import Dashboard from "views/Dashboard.js";
import FixedAsset from "views/FixedAsset.js";
import NonFixedAsset from "views/NonFixedAsset.js";
import Report from "views/Report.js";
import ManageStaff from "views/ManageStaff.js";
// import Login from "login/Login";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-bar-32",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/FixedAsset",
    name: "Fixed Assets",
    icon: "tim-icons icon-bank",
    component: <FixedAsset />,
    layout: "/admin",
  },
  {
    path: "/NonFixedAsset",
    name: "Non-Fixed Assets",
    icon: "tim-icons icon-world",
    component: <NonFixedAsset />,
    layout: "/admin",
  },
  {
    path: "/ManageStaff",
    name: "Manage Staffs",
    icon: "tim-icons icon-user-run",
    component: <ManageStaff />,
    layout: "/admin",
  },
  {
    path: "/Report",
    name: "Report",
    icon: "tim-icons icon-notes",
    component: <Report />,
    layout: "/admin",
  }
];
export default routes;
