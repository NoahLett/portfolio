import React from 'react';
import './AboutMe.css';

export default function AboutMe() {
  return (
    <div className='about'>
      <h1 className='about-header'>Who I Am</h1>
      <div className='about-box'>
        <div className='column-two-thirds'>
          <div>
            <p className='about-text'>
              My name is Noah Lett and I’m a software developer experienced in JavaScript, React, Node.js, Express, HTML5, CSS3, and several other tools and libraries. Before I entered the web development field, I worked in the real estate, escrow, and title industry, which allowed me to gain an excellent perspective in the backend of real estate transactions and loan closings. Working within a team was a major theme in the many positions I held at Atlas Title Company, and the interactions between my teammates, clients, borrowers, and third parties not only allowed me to hone both my written and verbal communication, but provided an excellent environment for the enhancement of my time management and prioritization skills.
            </p>
          </div>
          <div>
            <p className='about-text'>
              I began to take an interest in software development and coding in general around the end of my time at Point Loma Nazarene University, where I was in the process of earning my Bachelors degree in Business Administration. Before long, I was spending copious amounts of my free time self-teaching the fundamentals. I quickly realized a career in this field would be so much more personally gratifying to me than the work I was doing in escrow and title. I continued to educate myself as I conducted further research into accelerated programs, all while the Federal Reserve continued to raise interest rates, which obviously had adverse effects on the lending industry. It was at this point that I decided to step out of my position at Atlas, enroll in a full-immersion software development program, and pursue my dream full-time. The education I obtained at LearningFuze rapidly deepened my development capabilities, and more importantly, taught me how to properly address challenges and learn new concepts.
            </p>
          </div>
        </div>
        <div className='column-one-third'>
          <img className='headshot' src="images/headshot.jpg" alt="Noah Lett" />
        </div>
      </div>
    </div>
  );
}
