import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className='about'>
      <h1 className='about-header'>Who I Am</h1>
      <div className='about-box'>
        <div className='column-two-thirds'>
          <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet augue congue, accumsan turpis sit amet, laoreet lacus. Donec convallis nec orci in gravida. Suspendisse blandit aliquam mi, at bibendum ex eleifend sed. Curabitur quis interdum velit. Vivamus ornare est vel risus placerat, ut vulputate orci auctor. Mauris euismod lacinia vestibulum. Etiam maximus dui vitae purus ornare fringilla vel vel sapien. Pellentesque volutpat condimentum egestas. Integer finibus ante et sem porta euismod. Nulla pulvinar, nisi quis vestibulum elementum, leo libero venenatis nulla, sed congue sem felis eget urna. In congue dictum mi vitae posuere. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc bibendum commodo mi eget efficitur. Donec luctus massa quis velit fringilla, non pretium sapien pellentesque. Nulla sodales vitae metus in dignissim.</p>
        </div>
        <div className='column-one-third'>
          <img className='headshot' src="images/headshot.jpg" alt="Noah Lett" />
        </div>
        <div className='stack-header-box'>
          <h2 className='stack-header'>Languages, Tech, and Libraries</h2>
          <hr />
          <div className="icons-box">
            <img className='tech-icon' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40" />
            <img className='tech-icon' src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40" />
            <img className='tech-icon' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" />
            <img className='tech-icon' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" />
            <img className='tech-icon' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40" />
            <img className='tech-icon' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" />
            <img className='tech-icon' src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40" />
            <img className='tech-icon' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" />
            <img className='tech-icon' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" />
            <img className='tech-icon' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" />
            <img className='tech-icon' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" />
            <img className='tech-icon' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" />
            <img className='tech-icon' src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40" />
          </div>
        </div>
      </div>
    </div>
  );
}
