import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  "./style.css";
import Home from "./pages/Home";
import "./i18n";
import Languageselector from "./LanguageSelector";
import NotFound from "./components/NotFound/PageNotFount";
import Signup from "./components/signup/Signup";
import DescripHeader from "./components/header/Desheader";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Languageselector/>
      <div className="mr-50 mt-8 font-bold font-stretch-semi-condensed">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/*" element={<NotFound/>} />
          <Route path="/DescripHeader" element={<DescripHeader/>} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
