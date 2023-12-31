import {
      createBrowserRouter,
    } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Projects from "../Components/Projects/Projects";
import ContactMe from "../Components/Contact/ContactMe";
import About from "../pages/About";
import Skills from "../pages/Skills";
    export const router = createBrowserRouter([
      {
        path: "/",
        element: <App></App>,
        children:[
            {
                  index:true,
                  element:<Home></Home>
            },
            {
                  path:"/home",
                  element:<Home></Home>
            },
            {
                  path:"projects",
                  element:<Projects></Projects>
            },
            {
                  path:"contact",
                  element:<ContactMe></ContactMe>
            },
            {
                  path:"about",
                  element:<About></About>
            },
            {
                  path:"skills",
                  element:<Skills></Skills>
            },
        ]
      },
    ]);
    
    