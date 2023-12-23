import React from "react"

import MainRoot from "./root/MainRoot"

import { Route,Routes } from "react-router-dom"

import Home from "./pages/Home"

import TelecomsStrategy from "./pages/Consulting/Strategy"
import TelecomsAudit from "./pages/Consulting/Audit";
import TelecomsBench from "./pages/Consulting/Bench";
import TelecomsProcurement from "./pages/Consulting/Procurement";

import CustomerExp from "./pages/Expertise/CustomerExp";
import ContactCentres from "./pages/Expertise/ContactCentres";
import UnifiedCommunications from "./pages/Expertise/UnifiedCommunications";
import NetworkWAN from "./pages/Expertise/NetworkWAN";
import Mobile from "./pages/Expertise/Mobile";

import OurMission from "./pages/OurMission"
import News from "./pages/News"
import NewBox from "./pages/News/New";

import Privacy from "./pages/Privacy/Terms";
import Cookies from "./pages/Privacy/Cookies";
import Privacy2 from "./pages/Privacy/Privacy";
import Copyright from "./pages/Privacy/Copyright";
import Company from "./pages/Privacy/Company";

import Refund from "./pages/Privacy/Refund"
import Login from "./pages/Login";
import AddNews from "./pages/News/AddNews"

import Contact from "./pages/Contact";

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainRoot/>}>
        <Route path="/" element={<Home/>}/>

        <Route path="TelecomsStrategy" element={<TelecomsStrategy/>}/>
        <Route path="TelecomsProcurement" element={<TelecomsProcurement/>}/>
        <Route path="TelecomsAudit" element={<TelecomsAudit/>}/>
        <Route path="TelecomsBench" element={<TelecomsBench/>}/>

        <Route path="CustomerExp" element={<CustomerExp/>}/>
        <Route path="ContactCentres" element={<ContactCentres/>}/>
        <Route path="UnifiedCommunicayions" element={<UnifiedCommunications/>}/>
        <Route path="NetworkWAN" element={<NetworkWAN/>}/>
        <Route path="Mobile" element={<Mobile/>}/>

        <Route path="OurMission" element={<OurMission/>}/>

        <Route path="Blogs" element={<News/>}/>
        <Route path="Blog" element={<NewBox/>}/>

        <Route path="Privacy" element={<Privacy/>}/>
        <Route path="Cookies" element={<Cookies/>}/>
        <Route path="Privacy2" element={<Privacy2/>}/>
        <Route path="Copyright" element={<Copyright/>}/>
        <Route path="Company" element={<Company/>}/>
        <Route path="Refund" element={<Refund/>}/>

        <Route path="Login" element={<Login/>}/>
        <Route path="AddNews" element={<AddNews/>}/>

        <Route path="Contact" element={<Contact/>}/>
      </Route>
    </Routes>
  )
}

export default App
