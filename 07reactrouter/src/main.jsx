import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Users from "./components/Users/Users.jsx";
import Github,{githubInfoLoader} from "./components/Github/Github.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid?" element={<Users/>} ></Route>
      <Route 
      loader ={githubInfoLoader}
      path="github" 
      element={<Github/>} />
    </Route>
  )
);
// :userid?" using this u can move to http://localhost:5174/user/sarthak or what ever name and also you can grab it using const {userid} = useParams() {hook}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
