import { createBrowserRouter } from "react-router-dom";

import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AppsList from "../Components/AppsPage/AppsList";
import InstalledApps from "../Components/Installed Apps/InstalledApps";
import AppDetails from "../Components/AppDetails/AppDetails";

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
    },
    {
        path: '/installation',
        loader: async () => {
            const res = await fetch('/extended.json');
            if (!res.ok) throw new Response('Failed to load data', { status: res.status });
            return res.json();
          },
        Component: InstalledApps,
    },
    {
        path: '/appdetails/:id',
    loader: async () => {
      const res = await fetch('/extended.json');
      if (!res.ok) throw new Response('Failed to load data', { status: res.status });
      return res.json();
    },
        Component: AppDetails
    }
    ,
    // client-side catch-all: show ErrorPage for any unmatched route
    {
      path: '*',
      Component: ErrorPage,
    }
    ]
  },
]);