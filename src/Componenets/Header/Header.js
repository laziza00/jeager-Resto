import React from 'react'
import './Header.scss'
import Foods from '../object'

function Header(props) {

  let newArr =[]
  const searchHandler =(e)=> {
   console.log(e.target.value);

   Foods.forEach((item, i)=> {
      if(item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ){
        newArr.push(item)
      }

    })
    props.setArr(newArr)


  }


  return (
    <div className='header'>
        <div >
            <h1 className='header__title'>Jaegar Resto</h1>
            <p className='header__date'>Tuesday, 2 Feb 2021</p>
        </div>
        <div className='header__input-box'>
            <i className='bx bx-search'></i>
            <input className='header__input' onChange={searchHandler} type="text" placeholder='Search for food, coffe, etc..' />
        </div>
    </div>
  )
}

export default Header