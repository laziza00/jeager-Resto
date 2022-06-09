import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './HeroRight.scss'

function HerorightBtns() {

    const [activeBtn, setActiveBtn] =useState(false)


    const activeChangeHandler =()=> {
        setActiveBtn(!activeBtn)
    }
    const btns =[ 
        {
            id: 1,
            nameBtn: 'Dine In',
            btnActive: true,
        },
        {
            id: 1,
            nameBtn: 'To Go',
            btnActive: true,
        },
        {
            id: 1,
            nameBtn: 'Delivery',
            btnActive: true,
        },
]
  return (
     <div className='heroright__btns'>
        {btns.map((btn, i)=> {
            return(
                <NavLink to="/" className="heroright__link" key={i} >
                    <button id={btn.id} className="heroright__btn" onClick={()=>activeChangeHandler()}>
                         {btn.nameBtn}
                    </button>
                </NavLink>
          
              )
    })}
     </div>


  )
}

export default HerorightBtns

// className =`heroright__btn ${buttonClick}? 'active-btn' : ""` onClick={()=>rightHandlerBtns(!buttonClick)}