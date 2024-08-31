import React from 'react'
import "./Heropage.css"

function Heropage() {
  return (
    <div className='hero-container'>
        <img src="assets/ccclogo.png" className="logo" alt="CCC Logo" />
        <div className="hero-content">
            <ul>
                <li>CBIT</li>
                <li>CYBER SECURITY</li>
                <li>CLUB</li>
            </ul>
        </div>
    </div>
  )
}

export default Heropage

