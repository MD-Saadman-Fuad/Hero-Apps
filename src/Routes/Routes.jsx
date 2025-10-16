import { createBrowserRouter } from "react-router-dom";

import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AppsList from "../Components/AppsPage/AppsList";



export const router = createBrowserRouter([
  {
    path: "/",
        Component: Root,
    errorElement:<ErrorPage />,
    children: [
    {
      index: true,
      Component: Home,
    },
    {
        path: '/apps',
        Component: AppsList,
    }
        
    ]
  },
]);