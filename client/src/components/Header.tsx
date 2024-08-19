import React from 'react';
import '../assets/styles/LandingPage.css';
import profile from '../assets/images/profile.jpg';

const Header = () => {

  return (
    <div className="header-container">
      <div className="header">
      </div>
      <div className="profile-container">
        <img src={profile} className="profile-pic" />
      </div>
    </div>
  )
}

export default Header;