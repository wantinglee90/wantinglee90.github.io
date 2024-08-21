import React from 'react';
import '../assets/styles/LandingPage.css';
import LandingBanner from '../components/LandingBanner';
import LandingSectionOne from '../components/LandingSectionOne';
import LandingSectionTwo from '../components/LandingSectionTwo';

const LandingPage = () => {

  return (
    <div>
      <LandingBanner />
      <LandingSectionOne />
      <LandingSectionTwo />
    </div> 
  )
}

export default LandingPage;