import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

export default function MainRoot(){
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}