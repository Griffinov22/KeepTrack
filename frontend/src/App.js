import "./css/App.css";
import React, { useState } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
// pages
import SignUpPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Unauthorized from "./pages/Unauthorized";
import LayoutIndex from "./layout/LayoutIndex";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutIndex />}>
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path={"*"} element={<Unauthorized />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
