import React from 'react'
import GetStartedIcon from '../images/get-started.png'

function SnapdocsImageComponent() {
  return (
    <div className='snapdoc-section'>
        <img src={GetStartedIcon} alt='get started' />
        <div >
            <h1>Are you excited about Snapdocs</h1>
            <p>Let's get you started immediately as you join thousands of people to enjoy the clarirty and order you desrve for all your digital closings. we would be so happy to have you onboard.</p>
            <button>Get Started Now</button>
        </div>
    </div>
  )
}

export default SnapdocsImageComponent