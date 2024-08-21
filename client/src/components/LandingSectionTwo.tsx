import React from 'react';
import '../assets/styles/LandingPage.css';
import SectionTwoPic1 from '../assets/images/SectionTwoPic1.jpg';
import SectionTwoPic2 from '../assets/images/SectionTwoPic2.jpg';

const LandingSectionTwo = () => {

  return (
    <div className="section-container">
      <div className="section1-rightcontainer">
        <img src={SectionTwoPic1} className="background" />
        <div className="section2-1-overlay">
          <div className='section-text-container'>
            <div className="section-title"> XXXX </div>
            <div className="line" />
            <div className="section-subtext"> XXXXX </div>
          </div>
        </div>
      </div> 
      <div className="section1-leftcontainer">
        <img src={SectionTwoPic2} className="background" />
        <div className="section2-2-overlay">
          <div className='section-text-container'>
            <div className="section-title"> XXXXXX </div>
            <div className="line" />
            <div className="section-subtext"> XXXXXX </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default LandingSectionTwo;