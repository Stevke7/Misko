import {Route, Routes} from "react-router-dom";
import Work from "../pages/work/Work";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import React from "react";
import Home from "../pages/home/Home";

function SiteRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}

export default SiteRoutes