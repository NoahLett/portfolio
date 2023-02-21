import React from 'react';
import Card from './Card';
import './Deck.css';

export default function Deck() {
  return (
    <div className='deck'>
      <h1 className="deck-title">Featured Work</h1>
      <div className="deck-container">
        <ul className="deck-items">
          <Card
              src='images/bookworm.png'
              name='BookWorm'
              text='A full-stack React app for college student looking to save money on overpriced college textbooks.'
              path='https://book-worm.noahlett.com'
              techList='React, node.js, Express, AWS, CSS3, HTML Bootstrap, JSON Web Tokens, Webpack, Babel' />
          <Card
              src='images/beerbase.png'
              name='The Beer Base'
              text='A dynamic JavaScript, HTML, and CSS app for homebrewers looking to try new recipes and post their batches.'
              path='https://noahlett.github.io/beer-base/'
              techList='JavaScript ES5, CSS3, HTML, jQuery' />
        </ul>
      </div>
    </div>
  );
}
