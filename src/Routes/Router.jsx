import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import AddProperties from "../Pages/AddProperties/AddProperties";
import AllProperties from "../Pages/AllProperties/AllProperties";
import MyProperties from "../Pages/MyProperties/MyProperties";
import Retings from "../Pages/Retings/Retings";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Property from "../Pages/Property/Property";
import Error from "./Error";
import Update from "../Pages/Update/Update";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/properties'),
        Component: Home
      },
      {
        path: 'addproperties',
        element:
          <PrivateRoute>
            <AddProperties></AddProperties>
          </PrivateRoute>
      },
      {
        path: 'allproperties',
        loader: () => fetch('http://localhost:3000/properties'),
        Component: AllProperties
      },
      {
        path: 'properties/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/properties/${params.id}`),
        element:
          <PrivateRoute>
            <Property></Property>
          </PrivateRoute>
      },
      {
        path: 'myproperties/:email',
        element:
          <PrivateRoute>
            <MyProperties></MyProperties>
          </PrivateRoute>
      },
      {
        path: 'properties/ratings',
        loader:()=>fetch(`http://localhost:3000/reviews`),
        element:
          <PrivateRoute>
            <Retings></Retings>
          </PrivateRoute>
      },
      {
        path: 'properties/update/:id',
        loader:({params})=>fetch(`http://localhost:3000/properties/${params.id}`),
        element:
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
      },
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  },
  {
    path: '/*',
    Component: Error
  }
]);