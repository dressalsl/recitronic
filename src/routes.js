import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./components/Menu/Menu";
import App from "./App"
import PontoColeta from "./components/PontoColeta/PontoColeta";
import Content from "./components/Content/Content";

const AllRoutes = () => {
   return(
    <BrowserRouter>
        <Routes>
            <Route  path="/" element = { <App /> }  />
            <Route path="menu" element={<Content />}/>
            <Route  path="ponto-coleta" element = { <PontoColeta/> }  />
        </Routes>
    </BrowserRouter>
   )
}

export default AllRoutes;