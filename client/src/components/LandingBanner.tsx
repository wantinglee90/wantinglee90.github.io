import React from 'react';
import '../assets/styles/LandingPage.css';
import PageOneBG from '../assets/images/PageOneBG.jpg';

const LandingBanner: React.FC = () => {

  return (
    <div className="container">
       <img src={PageOneBG} className="background" />
       <div className="overlay">
        <div className='text-container'>
          <div className="title"> Wan Ting Lee </div>
          <div className="line" />
          <div className="subtext"> Full Stack Engineer | New York, NY </div>
        </div>
       </div>
    </div> 
  )
}

export default LandingBanner;