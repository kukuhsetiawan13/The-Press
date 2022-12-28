import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import LandingPage from "../views/LandingPage";
  import Main from "../views/Main";
  import NewsDetail from "../views/NewsDetail";


const router = createBrowserRouter([
    {
        path: "",
        element: <LandingPage />,
    },
    {
        path: "news",
        element: <Main />,
      },
      {
        path: "news/:newsId/:slug",
        element: <NewsDetail />,
      },
  ]);


export default router