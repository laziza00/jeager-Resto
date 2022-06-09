import React from 'react'
import { useState, useEffect } from "react";
import SideBar from './Hero/SideBar/SideBar';
import HeroBasic from './Hero/HeroBasic/HeroBasic';
import HeroRight from './Hero/HeroRight/HeroRight';
import Foods from './object';
import Layout from './Layout/Layout';
import '../App.scss'

function Main() {

  const [arr, setArr] =useState([])
  useEffect(()=> {
    setArr(Foods)
  }, [])

  const [newrArr, setNewArr] =useState([])
  const [counter, setCounter]= useState(0)
  const [suma, setSum] = useState([])

  useEffect(() => {
    let sum = 0
    newrArr.forEach(element => {
      sum += element.money
    })
    setSum(sum)
  });

 
  const addItems =(meal)=> {

      let count = newrArr.filter(item => item.id === meal.id);
      meal.count = count.length + 1;
      setNewArr([...newrArr, meal]);

      // if(newrArr.indexOf(item) !== -1) return 
      // setNewArr([...newrArr, item])

      }
      let removeItem = (e) => {
        setNewArr(newrArr.filter(item=> {
          return item.id !== e
        }))
      }

  return (
    <Layout>
      <div className="main">
            <SideBar/>
            <HeroBasic
                arr ={arr}
                setArr ={setArr}
                Foods ={Foods}
                addItems={addItems}
                newrArr ={newrArr}
                setNewArr ={setNewArr}
            />
            <HeroRight
                newrArr ={newrArr}
                setNewArr ={setNewArr}
                counter ={counter}
                removeItem ={removeItem}
                suma ={suma}
            />
      </div>
    </Layout>
  )
}

export default Main