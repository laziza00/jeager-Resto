import React from 'react'
import './SideBar.scss'
import { NavLink } from "react-router-dom";
import logo from '../../../assets/images/forumIn.svg'

function SideBar() {
  return(
    <div className="sitebar">
        <div className="sitebar__box">
            <div className="sitebar__logoBox">
                <img className="sitebar__logo" src={logo} alt="logo" />
            </div>
            <div className="sitebar__list">
                <NavLink to="/" className={({ isActive }) => isActive ? "activeCLass" : "sitebar__items"} style={{textDecoration: 'none'}}>
                    <button className = "sitebar__btn buttonAct">
                        <i className='bx bx-home-alt'></i>
                    </button>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "activeCLass" : "sitebar__items" } style={{textDecoration: 'none'}}>
                    <button className = "sitebar__btn buttonAct">
                        <i className='bx bx-certification'></i>
                    </button>
                </NavLink>
                <NavLink to="/portion" className={({ isActive }) => isActive ? "activeCLass" : "sitebar__items"} style={{textDecoration: 'none'}}>
                    <button className = "sitebar__btn buttonAct">
                        <i className='bx bx-circle-three-quarter bx-rotate-90' ></i>
                    </button>
                </NavLink>
                <NavLink to="/mail" className={({ isActive }) => isActive ? "activeCLass" : "sitebar__items"} style={{textDecoration: 'none'}}>
                    <button className = "sitebar__btn buttonAct">
                        <i className='bx bx-envelope'></i>
                    </button>
                </NavLink>
                <NavLink to="/notification" className={({ isActive }) => isActive ? "activeCLass" : "sitebar__items"} style={{textDecoration: 'none'}} >
                    <button className = "sitebar__btn buttonAct">
                        <i className='bx bx-bell'></i>
                    </button>
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => isActive ? "activeCLass" : "sitebar__items"} style={{textDecoration: 'none'}}>
                    <button className = "sitebar__btn buttonAct">
                        <i className='bx bx-cog'></i>
                    </button>
                </NavLink>
                <NavLink to="/login" className={({ isActive }) => isActive ? "activeCLass" : "sitebar__items"} style={{textDecoration: 'none'}}>
                    <button className = "sitebar__btn buttonAct">
                        <i className='bx bx-log-in'></i>
                    </button>
                </NavLink>
            </div>
        </div>
    </div>
)
}
export default SideBar