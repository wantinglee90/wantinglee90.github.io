import React from 'react';
import '../assets/styles/LandingPage.css';
import SectionOnePic1 from '../assets/images/SectionOnePic1.jpg';
import SectionOnePic2 from '../assets/images/SectionOnePic2.jpg';

const LandingSectionOne = () => {

  return (
    <div className="section-container">
      <div className="section1-leftcontainer">
        <img src={SectionOnePic1} className="background" />
        <div className="section1-1-overlay">
          <div className='section-text-container'>
            <div className="section-title"> Testsudo </div>
            <div className="line" />
            <div className="section-subtext"> An open source observability tool to test frontend, backend and security performance </div>
          </div>
        </div>
      </div> 
      <div className="section1-rightcontainer">
        <img src={SectionOnePic2} className="background" />
        <div className="section1-2-overlay">
          <div className='section-text-container'>
            <div className="section-title"> Occasio </div>
            <div className="line" />
            <div className="section-subtext"> An AI-powered event planning tool </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default LandingSectionOne;