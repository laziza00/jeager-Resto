import React from "react";
import { NavLink } from "react-router-dom";
import SideBar from "../Hero/SideBar/SideBar";
import Products from "./Products";
import './Edit.scss'
import './Settings.scss'


let category = [
  {
    title: 'Appereance',
    desc: 'Dark and Light mode, Font size',
    link: '/apperance',
    icon: 'bx bx-heart'
  },
  {
    title: 'Your Restaurant',
    desc: 'Dark and Light mode, Font size',
    link: '/your',
    icon: 'bx bx-store-alt'
  },
  {
    title: 'Products Management',
    desc: 'Manage your product, pricing, etc',
    link: '/products',
    icon: 'bx bxs-offer'
  },
  {
    title: 'Notifications',
    desc: 'Customize your notifications',
    link: '/notif',
    icon: 'bx bx-bell'
  },
  {
    title: 'Security',
    desc: 'Configure Password, PIN, etc',
    link: '/security',
    icon: 'bx bx-lock-open'
  },
  {
    title: 'About Us',
    desc: 'Find out more about Posly',
    link: '/about',
    icon: 'bx bx-error-circle'
  },
]

export default function Settings({meal, setMeal, newMeal, setNewMeal, arr, setArr }) {
  return(

    <div className="settings">
          <SideBar/>
          <div>
            <h1 className="settings__title">Settings</h1>
          <ul className="settings__listbox">
              {category.map((item, key) => {
                return(
                  <NavLink key={key+329} className={`settings__links`} to={item.link}>
                    <li className="settings__itembox">
                      <h2 className="settings__subtitle d-flex">
                        <i className={`settings__icons ${item.icon}`}></i> {item.title}
                      </h2>
                      <p className="settings__desc">{item.desc}</p>
                    </li>
                  </NavLink>
                )
              })
              }
            </ul>
          </div>
          <div>
            <Products
                meal={meal}
                setMeal={setMeal}
                newMeal={newMeal}
                setNewMeal={setNewMeal}
                arr ={arr}
                setArr ={setArr}
            />
        </div>
    </div>
  )
}