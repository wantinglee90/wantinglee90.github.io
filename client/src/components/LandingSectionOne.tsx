import React from 'react';
import { LandingPageProps } from '../types/LandingPage.types';
import '../assets/styles/LandingPage.css';
import SectionOnePic1 from '../assets/images/SectionOnePic1.jpg';
import SectionOnePic2 from '../assets/images/SectionOnePic2.jpg';

const LandingSectionOne: React.FC<LandingPageProps> = ({leftImage, rightImage, leftOverlayColor, rightOverlayColor, leftTitle, rightTitle, leftSubtext, rightSubtext}) => {

  return (
    <div className="section-container">
      <div className="section1-leftcontainer">
        <img src={leftImage} className="background" />
        <div className="section1-1-overlay">
          <div className='section-text-container'>
            <div className="section-title"> {leftTitle} </div>
            <div className="line" />
            <div className="section-subtext"> {leftSubtext} </div>
          </div>
        </div>
      </div> 
      <div className="section1-rightcontainer">
        <img src={rightImage} className="background" />
        <div className="section1-2-overlay">
          <div className='section-text-container'>
            <div className="section-title"> {rightTitle} </div>
            <div className="line" />
            <div className="section-subtext"> {rightSubtext} </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default LandingSectionOne;