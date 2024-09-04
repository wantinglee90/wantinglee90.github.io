import React from 'react';
import '../assets/styles/LandingPage.css';
import htmlIcon from '../assets/images/Html.png';

const TechStack: React.FC = () => {

  return (
    <div className="tech-container">
      <div className="tech-header">
        Tech Stack
      </div>
      <div className="icon-container">
        {/* languages */}
      <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/javascript-2752148-2284965.png' className="icon" />
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' className="icon" />
      <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/python-11796959-9632870.png?f=webp' className="icon" />
      {/* frontend tech */}
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png' className="icon" />
      <img src='https://cdn.worldvectorlogo.com/logos/redux.svg' className="icon" />
      <img src='https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' className="icon" />
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/856px-CSS.3.svg.png?20160504153216' className="icon" />
      <img src='https://sass-lang.com/assets/img/styleguide/seal-color.png' className="icon" />
      {/* backend tech */}
      <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/nodejs-11796942-9632853.png?f=webp&w=256' className="icon" />
      {/* databases */}
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/745px-Postgresql_elephant.svg.png' className="icon" />
      <img src='https://www.svgrepo.com/show/331488/mongodb.svg' className="icon" />
      {/* others */}
      <img src='https://cdn.worldvectorlogo.com/logos/webpack.svg' className="icon" />
      <img src='https://www.svgrepo.com/show/354048/material-ui.svg' className="icon" />
      <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/d3-js-icon.png' className="icon" />
      {/* devops */}
      <img src='https://www.svgrepo.com/show/331370/docker.svg' className="icon" />
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/1024px-AWS_Simple_Icons_AWS_Cloud.svg.png?20191001220601' className="icon" />
      {/* testing */}
      <img src='https://icon.icepanel.io/Technology/svg/Jest.svg' className="icon" />
      </div>
    </div>
  )
}

export default TechStack;