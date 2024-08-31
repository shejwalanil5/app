import React, { useState } from 'react'
import './About.css'
import figma from './assets/figma.png'
import HomeDark from './assets/Home Dark.png'
import Aboutdark from './assets/About - Dark.png'
import Aboutlight from './assets/About - Light.png'
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineFolderArrowDown } from "react-icons/hi2";
import { FaHandPointRight } from "react-icons/fa";


const About = () => {

  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => {
    setZoom(prevZoom => prevZoom + 10);
  };

  const handleZoomOut = () => {
    setZoom(prevZoom => (prevZoom > 10 ? prevZoom - 10 : prevZoom));
  };

  return (
    <div className='main-section-2'>
      
      <div className='header-section'>
        <h3>About</h3>
        <p>Comments 0</p>
      </div>
      <hr />
      <div className='section'>
        <div className='section-1'>
          <div className='innert-section'>
            <h3>Thank you for being here! ✨💖</h3>
            <p>A <span>"Personal Portfolio Website"</span> designed in <span>Figma.</span></p>
          </div>
          <div className='inner-section-1'>
            <p>Feel free to <span>duplicate</span> and <span>improve</span>, give your <span>feedbacks</span> or <span>suggestions</span> by tagging me on <span className='span'>Twitter</span>.
            </p>
          </div>
        </div>
        <div className='cv-section'>
          <p>Preview</p>
          <div className='main-cv-img'>
            <div className='cv-img'>
              <div className='img-section'>
                <img src={figma} alt=""
                  style={{ width: `${zoom}%`, transition: 'width 0.3s ease' }} />
                <img src={Aboutlight} alt=""
                  style={{ width: `${zoom}%`, transition: 'width 0.3s ease' }} />
              </div>
              <div className='img-section'>
                <img src={HomeDark} alt=""
                  style={{ width: `${zoom}%`, transition: 'width 0.3s ease' }} />
                <img src={Aboutdark} alt=""
                  style={{ width: `${zoom}%`, transition: 'width 0.3s ease' }} />
              </div>

            </div>
            <div className='tags'>
              <h3>Tags</h3>
              <div className='tag'>
                <p>assets</p>
                <p>dark</p>
                <p>design</p>
              </div>
              <div className='tag'>
                <p>landing page</p>
                <p>light</p>
              </div>
              <div className='tag'>
                <p>minimal</p>
                <p>modern</p>

              </div>
              <div className='tag'>
                <p>personal</p>
                <p>portfolio</p>
                <p>ui</p>
              </div>
              <div className='tag'>
                <p>webpage</p>
                <p>website</p>
              </div>
              <h3>Share</h3>
              <div className='social'>
                <p><FaFacebook /></p>
                <p><FaWhatsapp /></p>
                <p><HiOutlineFolderArrowDown /></p>
              </div>
              <hr/>
              <div className='figma'>
                <p className='p'><FaHandPointRight /></p>
                <p>For Figma</p>
              </div> 
              <hr/>
              <div className='text-last'>
                <p>Last updated 2 years ago</p>
                <p>Licensed under <span className='span'>CC BY 4.0</span>
                </p>
              </div>
              <div className='last'>
                <p>Report Resource</p>
              </div>
            </div>
          </div>
          <div className='zoom-in-out'>
            <p onClick={handleZoomIn}>+</p>
            <hr />
            <p>{zoom}%</p>
            <hr />
            <p onClick={handleZoomOut}>-</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About