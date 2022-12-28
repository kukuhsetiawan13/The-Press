import { createBrowserRouter, redirect } from "react-router-dom";
import Root from "../components/Root";
import RootSidebar from "../components/RootSidebar";
import Home from '../App'
import News from '../views/News'
import NewsForm from "../views/NewsForm";
import Categories from '../views/Categories'
import CategoryForm from "../views/CategoryForm";
import Tags from '../views/Tags'
import RegisterForm from '../views/RegisterForm'



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "",
                element: <RootSidebar />,
                loader: () => {
                    const isLoggedIn = localStorage.access_token
                    if(!isLoggedIn) return redirect('/')
                    else return isLoggedIn
                },
                children: [
                    {
                        path: "news",
                        element: <News />
                    },
                    {
                        path: "news/add",
                        element: <NewsForm />
                    },
                    {
                        path: "news/edit/:id",
                        element: <NewsForm />
                    },
                    {
                        path: "categories",
                        element: <Categories />
                    },
                    {
                        path: "categories/add",
                        element: <CategoryForm />
                    },
                    {
                        path: "categories/edit/:id",
                        element: <CategoryForm />
                    },
                    {
                        path: "tags",
                        element: <Tags />,
                    },
                    {
                        path: "register",
                        element: <RegisterForm />,
                    },
                ]
            }
            
        ]
    }
    
]);

export default router