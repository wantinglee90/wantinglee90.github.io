import React from 'react';
import '../assets/styles/LandingPage.css';
import { LandingPageProps } from '../types/LandingPage.types';

const LandingSectionTwo: React.FC<LandingPageProps> = ({leftImage, rightImage, leftOverlayColor, rightOverlayColor, leftTitle, rightTitle, leftSubtext, rightSubtext}) => {

  return (
    <div className="section-container">
      <div className="section1-rightcontainer">
        <img src={leftImage} className="background" />
        <div className="section2-1-overlay" style ={{backgroundColor: leftOverlayColor}}>
          <div className='section-text-container'>
            <div className="section-title"> {leftTitle} </div>
            <div className="line" />
            <div className="section-subtext"> {leftSubtext}  </div>
          </div>
        </div>
      </div> 
      <div className="section1-leftcontainer">
        <img src={rightImage}className="background" />
        <div className="section2-2-overlay" style ={{backgroundColor: rightOverlayColor}}>
          <div className='section-text-container'>
            <div className="section-title"> {rightTitle}  </div>
            <div className="line" />
            <div className="section-subtext"> {rightSubtext} </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default LandingSectionTwo;