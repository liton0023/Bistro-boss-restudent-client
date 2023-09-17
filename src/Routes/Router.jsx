import {
  createBrowserRouter
} from "react-router-dom";
import DashBoard from "../Layout/DashBoard";
import Main from "../Layout/Main";
import AddItem from "../pages/DashBoard/AddItem/AddItem";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import MyCart from "../pages/DashBoard/MyCart/MyCart";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import SingUp from "../pages/SingUp/SingUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from './PrivateRoute';

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:"/menu",
          element:<Menu></Menu>
        },
        {
          path:'/order',
          element:<PrivateRoute><Order></Order></PrivateRoute>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/singup',
          element:<SingUp></SingUp>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
        {
          path:'mycart',
          element:<MyCart></MyCart>
        },
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },{
          path:'addItem',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        }
      ]
    }
  ]);