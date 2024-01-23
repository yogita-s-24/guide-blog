import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import SignIn from "./Views/Signin";
import Projects from "./Views/Projects";
import Dashboard from "./Views/Dashboard";
import SignUp from "./Views/Signup";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById('root'))

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path : '/about',
    element : <About/>
  },
  {
    path : '/dashboard',
    element : <Dashboard/>
  },
  {
    path : '/projects',
    element : <Projects/>
  },
  {
    path : '/sign-in',
    element : <SignIn/>
  },
  {
    path: '/sign-up',
    element : <SignUp/>
  }
]);

root.render(<RouterProvider router={router}/>);

export default App;