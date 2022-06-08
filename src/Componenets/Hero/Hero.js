import React from 'react'
import HeroBasic from './HeroBasic/HeroBasic'
import HeroRight from './HeroRight/HeroRight'
import SideBar from './SideBar/SideBar'
import './Hero.scss'

function Hero() {
  return (
    <div className='hero'>
        <h1>Hero</h1>
        <SideBar/>
        <HeroBasic/>
        <HeroRight/>
    </div>
  )
}

export default Hero