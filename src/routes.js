import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App"
import PontoColeta from "./components/PontoColeta/PontoColeta";
import Faq from "./components/Faq/Faq";
import Text1 from '../src/components/Card_text/Card_text1';
import Text2 from '../src/components/Card_text/Card_text2';
import Text3 from '../src/components/Card_text/Card_text3'

const AllRoutes = () => {
   return(
    <BrowserRouter>
        <Routes>
            <Route  path="/" element = { <App /> }  />
            <Route  path="ponto-coleta" element = { <PontoColeta/> }  />
            <Route  path="faq" element = { <Faq/> }  />
            <Route  path="Text1" element = { <Text1/> }  />
            <Route  path="Text2" element = { <Text2/> }  />
            <Route  path="Text3" element = { <Text3/> }  />
        </Routes>
    </BrowserRouter>
   )
}

export default AllRoutes;