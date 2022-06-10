import React from "react";
import './Edit.scss'
import './Settings.scss'

export default function AddModal({addOpen, setAddOpen, meal, setMeal}) {

  let cancelHander = () => {
    setAddOpen(! addOpen)
  }

  let formHander = (e) => {
    e.preventDefault()
    setMeal([
      {
        id: meal.length + 1,
        title: e.target[0].value,
        img: e.target[1].value,
        price: e.target[4].value,
        theRest: e.target[2].value,
        foodType: e.target[3].value
      }, ...meal
    ])
    setAddOpen(! addOpen)
  }

  return(
    <section className={`edits ${addOpen ? 'edits__open' : ''}`}>
      <div className={`edits__main ${addOpen ? 'edits__mopen' : ''}`}>
        <h1 className="edits__title">Edit Product</h1>
        <form onSubmit={formHander} className="edits__form" action="">
          <label className="edits__label" htmlFor="">
            <span className="edits__name">Name</span>
            <input className="edits__input" type="text" placeholder="Name"/>
          </label>
          <label className="edits__label" htmlFor="">
            <span className="edits__name">Images</span>
            <input className="edits__input" type="text" placeholder="Images"/>
          </label>
          <label className="edits__label" htmlFor="">
            <span className="edits__name">Bowls</span>
            <input className="edits__input" type="text" placeholder="Bowls"/>
          </label>
          <label className="edits__label" htmlFor="">
            <span className="edits__name">Type</span>
            <input className="edits__input" type="text" placeholder="Type"/>
          </label>
          <label className="edits__label" htmlFor="">
            <span className="edits__name">Price</span>
            <input className="edits__input" type="text" placeholder="Price"/>
          </label>
          <div className="d-flex justify-content-between" style={{margin:' 20px 0 0 0'}}>
            <button type="button" onClick={cancelHander} className="payment__cancelbtn col-5 settings__discardbtn">Cancel</button>
            <button type="submit" className="payment__btn col-5 settings__savebtn">Add new dish</button>
          </div>
        </form>
      </div>
    </section>
  )
}