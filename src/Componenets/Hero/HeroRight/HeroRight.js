import React from 'react'
import { Link } from 'react-router-dom'
import HerorightBtns from './HerorightBtns'
import './HeroRight.scss'
import Foods from '../../object'
import HeroRightItems from './HeroRightItems'
import { useState, useEffect } from "react";
import Offcanvas from '../../Offcanvas/Offcanvas'




function HeroRight({newrArr,  counter, removeItem, suma }) {


    const [openOf, setOpenOf] = useState(false);
    const CanvasOpen = () => setOpenOf(!openOf);
    const CanvasClose = () => setOpenOf(!openOf);

    const [editArr, setEditdArr] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {

        let count = 0; 
        newrArr && newrArr.forEach(item => {
            count += item.price;
        });
        setTotalPrice(count)
        let temp = [...new Set(newrArr && newrArr.map(item => item))];

        setEditdArr(temp)
    }, [newrArr])

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
                {editArr && editArr.map((item, i)=> {
                    return (
                        <HeroRightItems
                        key ={i}
                        id ={item.id}
                        type ={item.foodType}
                        title ={item.title}
                        price ={item.price}
                        img ={item.img}
                        removeItem ={removeItem}
                        suma ={suma}
                        count ={item.count}
                        totalPrice ={totalPrice}
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
                <button className='heroright__foot-btn' onClick={CanvasOpen}>Continue to Payment</button>
            
            </div>
        </div>
        <Offcanvas
        CanvasClose ={CanvasClose}
        openOf ={openOf}
        />
    </div>
  )
}


export default HeroRight