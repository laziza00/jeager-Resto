import React from 'react'
import '../HeroBasic.scss'


function HeroBasicItems(props) {
console.log(props.id);
    const addItems =(e)=> {
        console.log(e.target.id);
    }

  return (
    <li className='herobasic__item' id={props.id} onClick={addItems}>
        <img className='herobasic__item-img' src={props.img} alt="img" />
        <div className='herobasic__item-inner'>
            <h3 className='herobasic__item-title'>
               {props.title}
            </h3>
            <p className='herobasic__item-price'>${props.price}</p>
            <p className='herobasic__item-bowl'>{props.theRest} Bowls available</p>
        </div>
    </li>
  )
}

export default HeroBasicItems