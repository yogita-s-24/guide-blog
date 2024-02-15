import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import SignIn from "./Views/Signin";
import Projects from "./Views/Projects";
import Dashboard from "./Views/Dashboard";
import SignUp from "./Views/SignUp";
import "./index.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/about',
      element: <About/>
    },
    {
      path: '/dashboard',
      element: <Dashboard/>
    },
    {
      path: '/projects',
      element: <Projects/>
    },
    {
      path: '/sign-in',
      element: <SignIn/>
    },
    {
      path: '/sign-up',
      element: <SignUp/>
    }
  ]);

  return <RouterProvider router={router}/>;
};

export default App;
