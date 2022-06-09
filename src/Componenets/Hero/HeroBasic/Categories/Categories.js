import React from 'react'
import '../HeroBasic.scss'

function Categories(props) {


const filterItems = (e) => {
    if(e.target.id ===" ") {
      props.setArr(props.Foods)
    }
    else 
    {
      const arr = props.Foods.filter((item) => {
        return item.foodType === e.target.id
    })
    props.setArr(arr);
    }

}


  return (
        <button onClick={filterItems} className='herobasic__btn' id={props.id}>{props.item}</button>
  )
}

export default Categories