import React from 'react'
import './HeroRight.scss'

function HeroRightItems(props) {
  return (
    <li className='heroright__item' key={props.key} id={props.id} type={props.foodType}>
    <div style={{display: 'flex', justifyContent: 'space-between', margin: '0 0 10px 0'}}>
        <div style={{display: 'flex'}}>
            <img className='heroright__item-img' src={props.img} alt="img" />
            <div className='heroright__item-box'>
                <h3 className='heroright__item-name'>{props.title}</h3>
                <p className='heroright__price'>${props.price}</p>
            </div>
        </div>

        <div style={{display: 'flex'}}>
            <button className='heroright__item-count'>1</button>
            <p className='heroright__item-big__price'>${props.price}</p>
        </div>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <p className='heroright__spic-text'>Please, just a little bit spicy only.</p>
        <button className='heroright__spic-btn'><i class='bx bx-trash-alt'></i></button>
    </div>

</li>
  )
}

export default HeroRightItems