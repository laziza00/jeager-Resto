import React from 'react'
import './Form.scss'

function Form() {
  return (
    <form className='form'>
        <div className="form__input-box">
            <p className='form__label'>Cardholder Name</p>
            <input className='form__input' type="text" placeholder='Levi Ackerman'/>
        </div>
        <div className="form__input-box">
            <p className='form__label'>Card Number</p>
            <input className='form__input' type="text" placeholder='2564 1421 0897 1244'/>
        </div>
        <div className="form__input-box box">
            <div>
                <p className='form__label'>Expiration Date</p>
                <input className='form__input' type="date" placeholder='02/2022'/>
            </div>
            <div>
                <p className='form__label'>CVV</p>
                <input className='form__input' type="password" placeholder='ooo'/>
            </div>
        
        </div>
        <div className="form__input-box box">
            <div>
                <p className='form__label'>Order Type</p>
                <input className='form__input' type="text" placeholder='Dine In'/>
            </div>
            <div>
                <p className='form__label'>Table no.</p>
                <input className='form__input' type="text" placeholder='140'/>
            </div>
        </div>
    </form>
  )
}

export default Form