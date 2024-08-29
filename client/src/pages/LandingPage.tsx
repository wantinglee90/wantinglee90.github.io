import React from 'react';
import '../assets/styles/LandingPage.css';
import LandingBanner from '../components/LandingBanner';
import TechStack from '../components/TechStack';
import LandingSectionOne from '../components/LandingSectionOne';
import LandingSectionTwo from '../components/LandingSectionTwo';
import testsudo from '../assets/images/Testsudo.png';
// import SectionOnePic2 from '../assets/images/SectionOnePic2.jpg';
// import SectionTwoPic1 from '../assets/images/SectionTwoPic1.jpg';
// import SectionTwoPic2 from '../assets/images/SectionTwoPic2.jpg';
// import SectionThreePic1 from '../assets/images/SectionThreePic1.jpg';
// import SectionThreePic2 from '../assets/images/SectionThreePic2.jpg';

const LandingPage: React.FC = () => {

  return (
    <div className="container">
      <LandingBanner />
      <TechStack />
      <LandingSectionOne 
        leftImage='https://images.unsplash.com/photo-1421435371524-d26441ec7dda?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        rightImage={testsudo}
        leftOverlayColor='#6FC3DF'
        rightOverlayColor=''
        leftTitle='Testsudo'
        leftSubtext='An open source observability tool to test frontend, backend and security performance'
        rightTitle=''
        rightSubtext=''
      />
        <LandingSectionTwo
        leftImage=''
        rightImage='https://images.unsplash.com/photo-1474905187624-b3deaf7aa4c2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        leftOverlayColor=''
        rightOverlayColor='#8D82C4'
        leftTitle=''
        leftSubtext=''
        rightTitle='Occasio'
        rightSubtext='An AI-powered event planning tool'
       />
      {/* <LandingSectionOne 
        leftImage='https://images.unsplash.com/photo-1421435371524-d26441ec7dda?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        rightImage='https://images.unsplash.com/photo-1415025148099-17fe74102b28?q=80&w=2736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        leftOverlayColor='#6FC3DF'
        rightOverlayColor='#8D82C4'
        leftTitle='Testsudo'
        leftSubtext='An open source observability tool to test frontend, backend and security performance'
        rightTitle='Occasio'
        rightSubtext='An AI-powered event planning tool'
      /> */}
      {/* <LandingSectionTwo
        leftImage='https://images.unsplash.com/photo-1514575111941-6ce0097e6dfd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        rightImage='https://images.unsplash.com/photo-1474905187624-b3deaf7aa4c2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        leftOverlayColor='#EC8D81'
        rightOverlayColor='#E7B788'
        leftTitle='TaxFolio'
        leftSubtext='An open source tax liabilities estimator'
        rightTitle='Voyager'
        rightSubtext='A content and collaboration organizer'
       /> */}
       <LandingSectionOne 
        leftImage='https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?q=80&w=2779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        rightImage='https://images.unsplash.com/reserve/m6rT4MYFQ7CT8j9m2AEC_JakeGivens%20-%20Sunset%20in%20the%20Park.JPG?q=80&w=2310&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        leftOverlayColor='#8EA9E8'  
        rightOverlayColor='#87C5A4'
        leftTitle='TaxFolio'
        leftSubtext='An open source tax liabilities estimator'
        rightTitle=''
        rightSubtext=''
      />
      <div className="footer" />
    </div> 
  )
}

export default LandingPage;