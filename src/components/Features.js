import React from 'react'
import ContractLogo from '../images/contract-icon.png'
import HandShakeLogo from '../images/handshake-icon.png'
import LighteningLogo from '../images/lightening-icon.png'
import SpeedLogo from '../images/speed-icon.png'
import TrustLogo from '../images/trust-icon.png'

function Features() {
  return (
    <div className='best-feature-section'>
        <div className="best-feature title">
            <h1>Our Best Features</h1>
            <div>
                <div className="orange"></div>
                <div className="black"></div>
            </div>
            <p>Digital is the new norm in mortgage, see what digital <br />closings can do for you</p>
        </div>
        <div className='feature-content'>
            <div className='feature-content-card maximize'>
                <div className='feature-content-img maximize'>
                    <img src={LighteningLogo} alt='' />
                </div>
                <span className='title'>Maximize Efficiency</span>
                <span className='content'>Close more loans by reducing emails and phone calls, standardizing workflows with your business partners, and having one central place for sending and receiving loan documents.</span>
            </div>
            <div className='feature-content-card borrower'>
                <div className='feature-content-img borrower'>
                    <img src={HandShakeLogo} alt='' />
                </div>
                <span className='title'>Delight Borrowers</span>
                <span className='content'>With tools like document preview, eSigning, and remote online notarization, you can give borrowers the easy, quick, and transparent digital closing they want and expect.</span>
            </div>
            <div className='feature-content-card trust'>
                <div className='feature-content-img trust'>
                    <img src={TrustLogo} alt='' />
                </div>
                <span className='title'>100% Trust</span>
                <span className='content'>Our brand has been one of the best celosing vendors with so many years of proves and testimoials which has been our selling point since our inception.</span>
            </div>
            <div className='feature-content-card speed'>
                <div className='feature-content-img speed'>
                    <img src={SpeedLogo} alt='' />
                </div>
                <span className='title'>Speedy process</span>
                <span className='content'>Be certain that all your eclosing processes will be as smooth as possible with little or no hindrance just for your best experience in mortage closing</span>
            </div>
            <div className='feature-content-card contract'>
                <div className='feature-content-img contract'>
                    <img src={ContractLogo} alt='' />
                </div>
                <span className='title'>Access to Notary signing agents</span>
                <span className='content'>Get access to over 50,000 mobile and remote loan signing opportunities each month, gain exposure to 100+ hiring companies, and efficiently manage your business with free tools</span>
            </div>
        </div>
    </div>
  )
}

export default Features