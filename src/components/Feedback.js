import React from 'react'
import FeedbackIcon from '../images/feedback.png'

function Feedback() {
  return (
    <div className='feedback-section'>
        <div className="feedback title">
            <h1>Our Product and Feedbacks</h1>
            <div>
                <div className="orange"></div>
                <div className="black"></div>
            </div>
            <p>What people have to say about our products and services</p>
        </div>
        <img src={FeedbackIcon} alt='feedback' />
    </div>
  )
}

export default Feedback