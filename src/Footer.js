import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      
    <div className="footer-column">
      <h3>Popular searches</h3>
      <p>Resume templates</p>
      <p>Mobile apps      </p>
      <p>Presentation templates</p>
      <p>UI kits</p>
      <p>Calendar templates</p>
    </div>
    <div className="footer-column">
      <h3>Most used</h3>
      <p>Material Design Icons</p>
      <p>Apple Design Resources</p>
      <p>Figma auto layout playground</p>
      <p>Anima - Figma to React, HTML</p>
      <p>Ant Design Open Source</p>
    </div>
    <div className="footer-column">
      <h3>Recommended categories</h3>
      <p>Instagram templates</p>
      <p>Workshop templates</p>
      <p>Data templates</p>
      <p>Laptop mockups</p>
      <p>Design inspirations</p>
    </div>
    <div className="footer-column">
      <h3>Top categories</h3>
      <p>Design templates</p>
      <p>Libraries</p>
      <p>Icons</p>
      <p>Development</p>
      <p>Brainstorming</p>
    </div>
  </footer>
  )
}

export default Footer