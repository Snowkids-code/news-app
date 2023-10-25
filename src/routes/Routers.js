import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Homepage from "../pages/Homepage";
import Stories from "../pages/Stories";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/stories/:id" element={<Stories />} />
      </Route>
    </Routes>
  );
}

export default Routers;
