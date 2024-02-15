

import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import NewsByCategory from "../components/Home/NewsByCategory";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    }
  ]);
  export default router;