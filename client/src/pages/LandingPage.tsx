import React from 'react';
import '../assets/styles/LandingPage.css';
import LandingBanner from '../components/LandingBanner';
import LandingSectionOne from '../components/LandingSectionOne';
import LandingSectionTwo from '../components/LandingSectionTwo';
import SectionOnePic1 from '../assets/images/SectionOnePic1.jpg';
import SectionOnePic2 from '../assets/images/SectionOnePic2.jpg';
import SectionTwoPic1 from '../assets/images/SectionTwoPic1.jpg';
import SectionTwoPic2 from '../assets/images/SectionTwoPic2.jpg';
import SectionThreePic1 from '../assets/images/SectionThreePic1.jpg';
import SectionThreePic2 from '../assets/images/SectionThreePic2.jpg';

const LandingPage: React.FC = () => {

  return (
    <div>
      <LandingBanner />
      <LandingSectionOne 
        leftImage={SectionOnePic1}
        rightImage={SectionOnePic2}
        leftOverlayColor='#6FC3DF'
        rightOverlayColor='#8D82C4'
        leftTitle='Testsudo'
        leftSubtext='An open source observability tool to test frontend, backend and security performance'
        rightTitle='Occasio'
        rightSubtext='An AI-powered event planning tool'
      />
      <LandingSectionTwo
        leftImage={SectionTwoPic1}
        rightImage={SectionTwoPic2}
        leftOverlayColor='#EC8D81'
        rightOverlayColor='#E7B788'
        leftTitle='TaxFolio'
        leftSubtext='An open source tax liabilities estimator'
        rightTitle='Voyager'
        rightSubtext='A content and collaboration organizer'
       />
       {/* <LandingSectionOne 
        leftImage={SectionThreePic1}
        rightImage={SectionThreePic2}
        leftOverlayColor='#8EA9E8'
        rightOverlayColor='#87C5A4'
        leftTitle='Testsudo'
        leftSubtext='An open source observability tool to test frontend, backend and security performance'
        rightTitle='Occasio'
        rightSubtext='An AI-powered event planning tool'
      /> */}
      <div className="footer" />
    </div> 
  )
}

export default LandingPage;