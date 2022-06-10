import React, { useState } from "react";
import Categories from "../Hero/HeroBasic/Categories/Categories";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import './Edit.scss'
import './Settings.scss'



export default function Products({meal, setMeal, newMeal, setNewMeal, arr, setArr }) {

  let [addOpen, setAddOpen] = useState(false)
  let [editOpen, setEditOpen] = useState(false)
  let [element, setElement] = useState([])

  let addHandler = () => {
    setAddOpen(! addOpen)
  }

  let editHandler = (id) => {
    setElement(id)
    setEditOpen(! editOpen)
  }

  const btns = ['All', 'Hot Dishes', 'Cold dishes', 'Soup', 'Grill', 'Appetizer', 'Dessert']
  const typeArr =[' ','hot-dishes', 'cold-dishes', 'soup','grill', 'appetizer', 'dessert' ]

  return(
    <div className="settings__main">
      <div className="settings__header-box">
        <h2 className="settings__main-title">Products Management</h2>
        <button className="settings__mangebtn"><i className='bx bx-slider-alt'></i> Manage Categories</button>
      </div>

      <div className='herobasic__btns box'>
             {btns.map((item, index)=> {
            return  <Categories
                    key = {"d"+index}
                    item = {item}
                    newMeal= {newMeal}
                    id = {typeArr[index]}
                    arr={arr}
                    setArr={setArr}
                    />
             })}
             </div>

      <ul className="settings__list d-flex">
      <li onClick={addHandler} className="settings__item settings__item-doshed">
        <button onClick={addHandler} className="settings__add">
          <i className='bx bx-plus' ></i>
          Add new dish
        </button>
      </li>

      {newMeal.map((item, key) => {
        return(
          <li key={key+324} className="settings__item">
            <div className="settings__imgbox">
              <img className="settings__img" src={item.img} alt={item.title} />
            </div>
            <div className="settings__infobox">
              <h3 className="settings__name">{item.title}</h3>
              <p className="settings__price">
                ${item.price} ∙ {item.theRest} Bowls
              </p>
            </div>
            <button onClick={() => editHandler(item)} className="settings__editbtn">
              <i className='bx bx-edit-alt'></i> Edit dish</button>
          </li>
        )
      })
      }
      </ul>
      <div className="settings__btnbox d-flex">
        <button className="settings__discardbtn">Discard Changes</button>
        <button className="settings__savebtn">Save Changes</button>
      </div>
      <EditModal
        element={element}
        editOpen={editOpen}
        setEditOpen={setEditOpen}
        newMeal={newMeal}
        setNewMeal={setNewMeal}
      />

      <AddModal
        meal={meal}
        setMeal={setMeal}
        addOpen={addOpen}
        setAddOpen={setAddOpen}
      />
    </div>
  )
}