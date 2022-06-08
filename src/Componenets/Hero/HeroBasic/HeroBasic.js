import React from 'react'
import Header from '../../Header/Header'
import Categories from './Categories/Categories'
import './HeroBasic.scss'
import HeroBasicItems from './HeroBasicItems/HeroBasicItems'
import Foods from '../../object'

function HeroBasic(props) {


  const btns = ['All', 'Hot Dishes', 'Cold dishes', 'Soup', 'Grill', 'Appetizer', 'Dessert']
  const typeArr =[' ','hot-dishes', 'cold-dishes', 'soup','grill', 'appetizer', 'dessert' ]

  return (
    <div className='herobasic'>
     
          <Header
                arr ={props.arr}
                setArr ={props.setArr} 
          />
             <div className='herobasic__btns'>
             {btns.map((item, index)=> {
            return  <Categories
                    key = {"d"+index}
                    item = {item}
                    Foods= {props.Foods}
                    id = {typeArr[index]}
                    arr={props.arr}
                    setArr={props.setArr}
                 />
             })}
             </div>

          
          <div className='herobasic__inner'>
            <div style={{display:'flex', justifyContent: 'space-between'}}>
                <h2 className='herobasic__inner-title'>Choose Dishes</h2>
                <button className='herobasic__inner-btn'><i className='bx bx-chevron-down'></i>Dine In</button>
            </div>
            <ul className='herobasic__list'>
            {props.arr && props.arr.map((item, i)=> {
                return ( <HeroBasicItems
                 id ={item.id}
                 key ={i}
                 title ={item.title}
                 img ={item.img}
                 price ={item.price}
                 theRest ={item.theRest}
                 foodType ={item.foodType}
                 />
                )
            })}
               
            </ul>
       
        </div>
    </div>
  )
}

export default HeroBasic