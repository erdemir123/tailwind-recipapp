import React from "react";
import Login from "../pages/Login"
import { Navigate, Route ,Routes } from "react-router-dom";
import Home from "../pages/Home";
import PrivateRouter from "./PrivateRouter";
import About from "../pages/About";
import Details from "../pages/Details";




const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/home" element={<PrivateRouter />}>
        <Route path="" element={<Home />} />
      </Route>
      <Route path="/about" element={<PrivateRouter />}>
        <Route path="" element={<About />} />
      </Route>
      <Route path="/details" element={<PrivateRouter />}>
        <Route path="" element={<Details />} />
      </Route>
      <Route path="*" element={ <Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
