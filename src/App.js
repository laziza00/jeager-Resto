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

function App() {
  const [arr, setArr] =useState([])
  useEffect(()=> {
    setArr(Foods)
  }, [])

  return (
    <Layout>
      <div className="App">
            <SideBar/>
            <HeroBasic
            arr ={arr}
            setArr ={setArr}
            Foods ={Foods}
            />
            <HeroRight/>
      </div>
    </Layout>
  );
}

export default App;
