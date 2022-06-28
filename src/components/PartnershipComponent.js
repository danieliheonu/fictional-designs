import React from 'react'
import Image1 from '../images/image1.png'
import Image2 from '../images/image2.png'
import Image3 from '../images/image3.png'
import Image4 from '../images/image4.png'
import Image5 from '../images/image5.png'
import Image6 from '../images/image6.png'
import Image7 from '../images/image7.png'

function PartnershipComponent() {
  return (
    <div className='partnership-section'>
        <div className="partnership title">
            <h1>In Partnership</h1>
            <div>
                <div className="orange"></div>
                <div className="black"></div>
            </div>
            <p>Over 4,000+ companies has enjoyed game-changing efficiences <br />and referal-worthy experiences</p>
        </div>
        <div className='partnership-companies'>
            <img src={Image1} alt='' />
            <img src={Image2} alt='' />
            <img src={Image3} alt='' />
            <img src={Image4} alt='' />
            <img src={Image5} alt='' />
            <img src={Image6} alt='' />
            <img src={Image7} alt='' />
        </div>
    </div>
  )
}

export default PartnershipComponent