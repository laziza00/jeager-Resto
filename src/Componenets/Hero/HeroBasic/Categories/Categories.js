import React from 'react'
import '../HeroBasic.scss'

function Categories(props) {

  const filterItems=(e)=> {

  if(e.target.id ===" ") {
      props.setArr(props.Foods)
  }
  if(e.target.id === "hot-dishes") {
  
      props.setArr(props.Foods.filter(item => {
          return item.foodType === e.target.id
      }))
  }
  if(e.target.id ==="cold-dishes") {
      props.setArr(props.Foods.filter(item=> {
          return (item.foodType === e.target.id )
      }))
  }
  if(e.target.id === "soup") {
      props.setArr(props.Foods.filter(item => {
          return item.foodType === e.target.id
      }))
  }
  if(e.target.id === "grill") {
      props.setArr(props.Foods.filter(item => {
          return item.foodType === e.target.id
      }))
  }

  }


  return (
        <button onClick={filterItems} className='herobasic__btn' id={props.id}>{props.item}</button>
  )
}

export default Categories