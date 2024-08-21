import React from 'react';
import '../assets/styles/LandingPage.css';
import LandingBanner from '../components/LandingBanner';
import LandingSectionOne from '../components/LandingSectionOne';

const LandingPage = () => {

  return (
    <div>
      <LandingBanner />
      <LandingSectionOne />
    </div> 
  )
}

export default LandingPage;