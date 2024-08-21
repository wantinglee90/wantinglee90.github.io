import React from 'react';
import '../assets/styles/LandingPage.css';
import LandingBanner from '../components/LandingBanner';
import LandingSectionOne from '../components/LandingSectionOne';
import LandingSectionTwo from '../components/LandingSectionTwo';
import SectionTwoPic1 from '../assets/images/SectionTwoPic1.jpg';
import SectionTwoPic2 from '../assets/images/SectionTwoPic2.jpg';

const LandingPage: React.FC = () => {

  return (
    <div>
      <LandingBanner />
      <LandingSectionOne 
        leftImage='../assets/images/SectionOnePic1.jpg'
        rightImage='../assets/images/SectionOnePic2.jpg'
        leftOverlayColor='#'
        rightOverlayColor='#'
        leftTitle='Testsudo'
        leftSubtext='An open source observability tool to test frontend, backend and security performance'
        rightTitle='Occasio'
        rightSubtext='An AI-powered event planning tool'
      />
      <LandingSectionTwo />
    </div> 
  )
}

export default LandingPage;