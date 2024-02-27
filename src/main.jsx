import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  Route,
  Router,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Components/Layout.jsx";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import Home from "./Components/Home.jsx";
import Github  from "./Components/Github.jsx";
import { Githubinfo } from "./Components/Github.jsx";
import User from "./Components/User.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
  
      <Route path="/" element={<Layout />} >
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
      loader={Githubinfo}
       path="github" 
       element={<Github
      
      
      
      />} />
      <Route path="user/:userid" element={<User />} />
      </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
