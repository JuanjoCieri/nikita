import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail.jsx/Detail";
import Pantuflas from "./components/Pages/Pantuflas";
import Alfombras from "./components/Pages/Alfombras";
import Pijamas from "./components/Pages/Pijamas";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/productdetail/:id"} element={<Detail />} />
          <Route path={"/products/pantuflas"} element={<Pantuflas />} />
          <Route path={"/products/alfombras"} element={<Alfombras />} />
          <Route path={"/products/pijamas"} element={<Pijamas />} /> 
        </Routes>
      </BrowserRouter>
  );
}

export default App;
