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
          <div className="banner-icon-container">
            <a href="mailto:wanting.lee90@gmail.com" target="_blank"><img src="https://www.svgrepo.com/show/353196/mail-with-circle.svg" className="banner-icon" /></a>
            <a href="https://www.linkedin.com/in/leewanting/" target="_blank"><img src="https://static-00.iconduck.com/assets.00/linkedin-with-circle-icon-512x512-cvyrro5n.png" className="banner-icon" /></a>
            <a href="https://github.com/wantinglee90" target="_blank"><img src="https://cdn-icons-png.flaticon.com/256/25/25231.png" className="banner-icon" /></a>
          </div>
        </div>
       </div>
    </div> 
  )
}

export default LandingBanner;