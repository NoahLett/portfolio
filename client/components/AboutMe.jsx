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
      </div>
    </div>
  );
}
