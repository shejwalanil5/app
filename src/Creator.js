import React from 'react'
import Banner1 from './assets/banner-1.png';
import Banner2 from './assets/banner-2.png'
import Banner3 from './assets/banner-3.png'
import './Creator.css'

const Creator = () => {
  return (
    <div className='creator'>
        <p>More by this creator</p>
        <div className='banner-img'>
            <div className='banner'>
                <img src={Banner1} alt="" />
                <p>Resume</p>
            </div>
            <div className='banner'>
                <img src={Banner2} alt="" />
                <p>Investment Portfolio</p>
            </div>
            <div className='banner'>
                <img src={Banner3} alt="" />
                <p>FlowCart Symbols</p>
            </div>
        </div>
        <hr/>
    </div>
  )
}

export default Creator