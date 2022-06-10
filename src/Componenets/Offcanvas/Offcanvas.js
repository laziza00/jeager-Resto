import React from 'react'
import Form from './Form/Form'
import './Offcanvas.scss'

function Offcanvas({openOf, CanvasClose}) {
  return (
    <div className={`ofcanvas ${openOf ? 'openModal' : "" }`}>
        <h2 className='ofcanvas__title'>Payment</h2>
        <p className='ofcanvas__title-text'>3 payment method available</p>
    
        <div className='ofcanvas__inner-box'>
            <h3 className='ofcanvas__method'>Payment Method</h3>
            <div className='ofcanvas__method-btns'>
                <button className='ofcanvas__method-btn'>
                    <i className='bx bx-credit-card-front'></i>
                    <p>Credit Card</p> 
                </button>
                <button className='ofcanvas__method-btn'>
                    <i className='bx bxl-paypal' ></i>
                    <p>  Paypal </p> 
                </button>
                <button className='ofcanvas__method-btn'>
                      <i className='bx bx-credit-card'></i>
                      <p> Cash </p> 
                </button>
            </div>
            <Form/>
            <div className='ofcanvas__btns'>
                <button className='ofcanvas__btn' onClick={CanvasClose}>Cancel</button>
                <button className='ofcanvas__btn act-btn' >Confirm Payment</button>
            </div>
        </div>
    </div>
  )
}

export default Offcanvas