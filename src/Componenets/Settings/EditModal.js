import React from "react";
import './Edit.scss'
import './Settings.scss'

let foods = []
export default function EditModal({editOpen, setEditOpen, newMeal, setNewMeal, element}) {

  foods = newMeal

  let cancelHandler = () => {
    setEditOpen(!editOpen)
  }

  let formHandler = (e) => {
    e.preventDefault()
    foods.map(item => {
      if(item.id === element.id) {
        item.title = e.target[0].value
        item.img = e.target[1].value
        item.theRest = e.target[2].value
        item.foodType = e.target[3].value
        item.price = e.target[4].value
      }
    })
    setEditOpen(!editOpen)
  }
  setNewMeal(foods)

  return(
    <section className={`edits ${editOpen ? 'edits__open' : ''}`}>
      <div className={`edits__main ${editOpen ? 'edits__mopen' : ''}`}>
        <h1 className="edits__title">Edit Product</h1>
        <form onSubmit={formHandler} className="edits__form" action="">
          <label className="edits__label" htmlFor="">
            <span className="edits__name">Name</span>
            <input className="edits__input" type="text" defaultValue={element.title} placeholder="Name"/>
          </label>
          <label className="edits__label" htmlFor="">
            <span className="edits__name">Images</span>
            <input className="edits__input" type="text" defaultValue={element.img} placeholder="Images"/>
          </label>
          <label className="edits__label" htmlFor="">
            <span className="edits__name">Bowls</span>
            <input className="edits__input" type="text" defaultValue={element.theRest} placeholder="Bowls"/>
          </label>
          <label className="edits__label" htmlFor="">
            <span className="edits__name">Type</span>
            <input className="edits__input" type="text" defaultValue={element.foodType}  placeholder="Type"/>
          </label>
          <label className="edits__label" htmlFor="">
            <span className="edits__name">Price</span>
            <input className="edits__input" type="text" defaultValue={element.price} placeholder="Price"/>
          </label>
          <div className="d-flex justify-content-between" style={{margin:' 20px 0 0 0'}}>
            <button type="button" onClick={cancelHandler} className="payment__cancelbtn settings__discardbtn col-5">Cancel</button>
            <button type="submit" className="payment__btn col-5 settings__savebtn">Confirm Payment</button>
          </div>
        </form>
      </div>
    </section>
  )
}