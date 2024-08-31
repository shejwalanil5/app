import React,{useState} from 'react'
import gents from './assets/gent.png'
import { CiHeart } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { CiStickyNote } from "react-icons/ci";
import figma from './assets/figma.png'
import './Task.css'

const Task = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <div className='main-section'>
        <div className='hero-section-left'>
          <div className='hero-section-left-1'>
            <img src={gents} alt="" />
            <p>Anish</p>
          </div>
          <div className='hero-section-left-2'>
            <h2>Portfolio Website</h2>
          </div>
          <div className='hero-section-left-3'>
            <p>Design file</p>
            
            <p><span><CiHeart /></span> 109</p>
            <p><span><IoIosContact /></span> 2.1k users</p>
          </div>
          <div className='hero-section-left-4'>
            <button className='open-in-figma'>Open in Figma</button>
            <p><CiHeart /></p>
            <p><CiStickyNote /></p>

          </div>
        </div>
        <div className='hero-section-right'>
           <img  onClick={handleImageClick}  src={figma} alt="" />
        {isModalOpen &&(
        <div className="modal" onClick={handleImageClick}>
        <img className="fullscreen-image"  src={figma} alt="" />
        </div>
        )}
        </div>
    </div>
  )
}

export default Task