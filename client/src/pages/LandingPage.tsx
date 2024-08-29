import React from 'react';
import '../assets/styles/LandingPage.css';
import LandingBanner from '../components/LandingBanner';
import TechStack from '../components/TechStack';
import LandingSectionOne from '../components/LandingSectionOne';
import LandingSectionTwo from '../components/LandingSectionTwo';
import testsudo from '../assets/images/Testsudo.png';
import occasio from '../assets/images/Occasio.png';
import taxfolio from '../assets/images/Taxfolio.png';
import voyager from '../assets/images/Voyager.png';

const LandingPage: React.FC = () => {

  const testsudoTech = ['NodeJS', 'ExpressJS', 'React', 'Docker', 'AWS', 'Material-UI', 'recharts', 'OAuth', 'PostgreSQL', 'MongoDB'];

  const occasioTech = ['OpenAI GPT-4o', 'NodeJS', 'ExpressJS', 'React', 'Jest', 'Figma', 'PostgreSQL', 'MongoDB'];

  const taxfolioTech = ['NodeJS', 'React', 'Redux Toolkit Query', 'D3', 'Plaid API', 'Material-UI', 'PostgreSQL', 'MongoDB'];

  const voyagerTech = ['NodeJS', 'ExpressJS', 'React', 'AWS S3', 'HTML/CSS', 'PostgreSQL', 'webpack'];

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
        leftSubtext='An open source observability tool for frontend, backend and security performance'
        rightTitle=''
        rightSubtext=''
        technology={testsudoTech}
      />
        <LandingSectionTwo
        leftImage={occasio}
        rightImage='https://images.unsplash.com/photo-1415025148099-17fe74102b28?q=80&w=2736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        leftOverlayColor=''
        rightOverlayColor='#8D82C4'
        leftTitle=''
        leftSubtext=''
        rightTitle='Occasio'
        rightSubtext='An AI-powered event planning tool'
        technology={occasioTech}
       />
      <LandingSectionOne 
        leftImage='https://images.unsplash.com/photo-1514575111941-6ce0097e6dfd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        rightImage={taxfolio}
        leftOverlayColor='#EC8D81'
        rightOverlayColor='4'
        leftTitle='TaxFolio'
        leftSubtext='An open source tax liabilities estimator'
        rightTitle=''
        rightSubtext=''
        technology={taxfolioTech}
      />
        <LandingSectionTwo
        leftImage={voyager}
        rightImage='https://images.unsplash.com/photo-1474905187624-b3deaf7aa4c2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3'
        leftOverlayColor=''
        rightOverlayColor='#E7B788'
        leftTitle=''
        leftSubtext=''
        rightTitle='Voyager'
        rightSubtext='A collaboration tool for content creators'
        technology={voyagerTech}
       />
       {/* <LandingSectionOne 
        leftImage='https://images.unsplash.com/photo-1468476396571-4d6f2a427ee7?q=80&w=2779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        rightImage=''
        leftOverlayColor='#8EA9E8'  
        rightOverlayColor='#87C5A4'
        leftTitle='TaxFolio'
        leftSubtext='An open source tax liabilities estimator'
        rightTitle=''
        rightSubtext=''
        technology={['']}
      />
        <LandingSectionTwo
        leftImage=''
        rightImage='https://images.unsplash.com/reserve/m6rT4MYFQ7CT8j9m2AEC_JakeGivens%20-%20Sunset%20in%20the%20Park.JPG?q=80&w=2310&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        leftOverlayColor=''
        rightOverlayColor='#87C5A4'
        leftTitle=''
        leftSubtext=''
        rightTitle='Voyager'
        rightSubtext='A collaboration tool for content creators'
        technology={['']}
       /> */}
      {/* <div className="footer" /> */}
    </div> 
  )
}

export default LandingPage;