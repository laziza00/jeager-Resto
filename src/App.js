import { Routes, Route } from "react-router-dom"
import './App.scss';
import Layout from './Componenets/Layout/Layout';
import SideBar from './Componenets/Hero/SideBar/SideBar';
import HeroBasic from './Componenets/Hero/HeroBasic/HeroBasic';
import Main from './Componenets/Main'
import SaveList from "./Componenets/SaveList/SaveList";
import HeroRight from "./Componenets/Hero/HeroRight/HeroRight";
import { useState, useEffect } from "react";
import Foods from './Componenets/object'
// import Settings from "./Componenets/Settings/Settings";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
      {/* <Routes>
        <Route path="settings" element={<Settings/>} />
      </Routes> */}
    </div>
  )
}

export default App;
