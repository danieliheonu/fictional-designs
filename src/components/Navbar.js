import React from 'react'
import Logo from '../images/logo.png'

function Navbar() {
  return (
    <nav>
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        <div>
            <ul>
                <li>Lenders</li>
                <li>Title/Escrow</li>
                <li>Notary Signing Agents</li>
                <li>Our Resources</li>
            </ul>
        </div>
        <button>Sign In</button>
    </nav>
  )
}

export default Navbar