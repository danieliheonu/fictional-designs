import React from 'react'
import AboutLogo from '../images/about.png'

function WhoWeAreComponent() {
  return (
    <div>
        <div>
            <div className="title">
                <h1>Who we are</h1>
                <div>
                    <div className="orange"></div>
                    <div className="black"></div>
                </div>
                <p>Digital is the new norm in mortgage, see what digital <br />closings can do for you</p>
            </div>
            <div className='about-content'>
                <img src={AboutLogo} alt='who we are' />
                <div className='container'>
                    <div className='container-group'>
                        <div className='circle'>1</div>
                        <h4>Snapdoc is a digital closing platform, that helps you to manage and create and run all your closings and documents electronically and to enable electronic signatures and electronic notarizations.</h4>
                    </div>
                    <div className='container-group'>
                        <div className='circle'>2</div>
                        <h4>We also help you automate your closing workflows and connect with more than 65,000 qualified notary signing agents and attorneys for mobile and remote closings.</h4>
                    </div>
                    <div className='container-group'>
                        <div className='circle'>3</div>
                        <h4>And also we offer hybrid and full eClosings, increase the loan capacity of your closers, and impress borrowers with a simple and modern 15-minute closing.</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhoWeAreComponent