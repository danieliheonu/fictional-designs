import React from 'react'
import Header from '../images/header.png'
import MessageIcon from '../images/msg-icon.png'

function HeroComponent() {
  return (
    <div className="hero-section">
        <div className="hero-content">
            <h1>Easily get your <span>digital</span> mortgage closings</h1>
            <p>Be certain, that getting started with us you will enjoy an incredibly digital mortage closing and you can expect a faster and more convenient closing process for everyone involved., which we assure you</p>
            <div className="hero-content-btn">
                <button className="btn-get-started">Get Started</button>
                <button className="btn-request-a-demo">
                    <img src={MessageIcon} alt="" />
                    Request a Demo
                </button>
            </div>
        </div>
        <div className="hero-img">
            <img src={Header} alt="" />
        </div>
    </div>
  )
}

export default HeroComponent