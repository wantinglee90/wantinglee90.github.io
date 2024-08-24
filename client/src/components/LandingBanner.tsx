import React from 'react';
import '../assets/styles/LandingPage.css';
import PageOneBG from '../assets/images/PageOneBG.jpg';

const LandingBanner: React.FC = () => {

  return (
    <div className="bg-container">
       <img src='https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="background" />
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