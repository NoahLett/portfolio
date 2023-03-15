import React from 'react';
import Card from './Card';
import './Deck.css';

export default function Deck() {
  return (
    <div className='deck'>
      <h1 className="deck-title">Featured Projects</h1>
      <div className="deck-container">
        <ul className="deck-items">
          <Card
            src='images/cookscabinet.png'
            name='CooksCabinet (In Progress)'
            text='A full-stack React and Redux app for home chefs who want to share and try recipes.'
            path='/'
            techList='React, Redux, Materialize, EmailJS, node.js, Express, AWS, CSS3, HTML, Webpack, Babel' />
          <Card
              src='images/bookworm.png'
              name='BookWorm'
              text='A full-stack React app for college students looking to save money on overpriced textbooks.'
              path='https://book-worm.noahlett.com'
              techList='React, node.js, Express, AWS, CSS3, HTML, Bootstrap, JSON Web Tokens, Webpack, Babel' />
          <Card
              src='images/beerbase.png'
              name='The Beer Base'
              text='A dynamic JavaScript, HTML, and CSS app for homebrewers looking to try new recipes and post their batches.'
              path='https://noahlett.github.io/beer-base/'
              techList='JavaScript ES5, CSS3, HTML, jQuery, External APIs, XML HttpRequests' />
          <Card
              src='images/code-journal.png'
              name='Code Journal'
              text='A JavaScript, HTML, and CSS CRUD note-taking app for coders who wish to document their learning.'
              path='https://noahlett.github.io/code-journal/'
              techList='JavaScript ES5, CSS3, HTML, jQuery' />
        </ul>
      </div>
    </div>
  );
}
