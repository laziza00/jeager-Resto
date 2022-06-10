import { Routes, Route } from "react-router-dom"
import './App.scss';
import Main from './Componenets/Main'
import Settings from "./Componenets/Settings/Settings";
import { useState, useEffect } from "react";
import Foods from "./Componenets/object";

function App() {

  let [meal, setMeal] = useState(Foods)
  let [newMeal, setNewMeal] = useState(meal)

  useEffect(() => {
    setNewMeal(meal)
  }, [meal])

  const [arr, setArr] =useState([])
  
  useEffect(()=> {
    setArr(Foods)
  }, [])
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main
               arr ={arr}
               setArr = {setArr}
        />} />
      </Routes>
      <Routes>
        <Route path="settings" element={<Settings
               meal={meal}
               setMeal={setMeal}
               newMeal={newMeal}
               setNewMeal={setNewMeal}
               arr ={arr}
               setArr = {setArr}
        />} />
      </Routes>
    </div>
  )
}

export default App;
