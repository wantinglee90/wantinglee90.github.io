import React from 'react';
import { LandingPageProps } from '../types/LandingPage.types';
import '../assets/styles/LandingPage.css';

const LandingSectionOne: React.FC<LandingPageProps> = ({leftImage, rightImage, leftOverlayColor, rightOverlayColor, leftTitle, rightTitle, leftSubtext, rightSubtext}) => {

  return (
    <div className="section-container">
      <div className="section1-leftcontainer">
        <img src={leftImage} className="background" />
        <div className="section1-1-overlay" style ={{backgroundColor: leftOverlayColor}}>
          <div className='section-text-container'>
            <div className="section-title"> {leftTitle} </div>
            <div className="line" />
            <div className="section-subtext"> {leftSubtext} </div>
          </div>
        </div>
      </div> 
      <div className="section1-rightcontainer">
        <img src={rightImage} className="screenshot" />
        <div className="techlist">
          <div className="technology">NodeJS</div>
          <div className="technology">ExpressJS</div>
          <div className="technology">React</div>
          <div className="technology">HTML/CSS</div>
          <div className="technology">PostgreSQL</div>
          <div className="technology">MongoDB</div>
          <div className="technology">Docker</div>
          <div className="technology">AWS</div>
          <div className="technology">recharts</div>
        </div>
        {/* <div className="section1-2-overlay" style ={{backgroundColor: rightOverlayColor}}>
          <div className='section-text-container'>
            <div className="section-title"> {rightTitle} </div>
            <div className="line" />
            <div className="section-subtext"> {rightSubtext} </div>
          </div>
        </div> */}
      </div> 
    </div>
  )
}

export default LandingSectionOne;