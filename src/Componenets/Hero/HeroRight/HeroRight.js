import React from 'react'
import { Link } from 'react-router-dom'
import HerorightBtns from './HerorightBtns'
import './HeroRight.scss'
import Foods from '../../object'
import HeroRightItems from './HeroRightItems'

function HeroRight() {
  return (
    <div className='heroright'>
      
        <div className='heroright__inner'>
            <h2 className='heroright__title'>Orders #34562</h2>
            <HerorightBtns/>
            <div className='heroright__main-box'>
                <h3 className='heroright__main-title'>Item</h3>
                <div className='heroright__main-inner'>
                    <h3 className='heroright__main-title'>Qty</h3>
                    <h3 className='heroright__main-title'>Price</h3>
                </div>
            </div>
            <ul className='heroright__list'>
                {Foods.map((item, i)=> {
                    return (
                        <HeroRightItems
                        key ={i}
                        id ={item.id}
                        type ={item.foodType}
                        title ={item.title}
                        price ={item.price}
                        img ={item.img}
                      
                        />
                    )
                })}

            </ul>
            <div className="heroright__footer">
                <div style={{display: 'flex', justifyContent: 'space-between' , margin: '0 0 19px 0'}}>
                    <p className='heroright__discount'>Discount</p>
                    <p className='heroright__discount-zero'>$0</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', margin: '0 0 19px 0'}}>
                    <p className='heroright__discount'>Sub total</p>
                    <p className='heroright__discount-zero'>$21,03</p>
                </div>
                <button className='heroright__foot-btn'>Continue to Payment</button>
            </div>
        </div>

    </div>
  )
}

export default HeroRight