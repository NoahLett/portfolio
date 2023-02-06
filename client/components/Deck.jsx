import React from 'react';
import Card from './Card';
import './Deck.css';

export default function Deck() {
  return (
    <div className='deck'>
      <h1 className="deck-title">Check Out My Projects</h1>
      <div className="deck-container">
        <div className="deck-wrapper">
          <ul className="deck-items">
            <Card
              src='images/bookworm.png'
              name='BookWorm'
              text='A full-stack React application for college student looking to save money on overpriced college textbooks.'
              path='https://book-worm.noahlett.com'
              techList='' />
            <Card
              src='images/beerbase.png'
              name='The Beer Base'
              text='A dynamic JavaScript, HTML, and CSS application for homebrewers looking to try new recipes and post their batches.'
              path='https://noahlett.github.io/beer-base/'
              techList='JavaScript ES5' />
          </ul>
        </div>
      </div>
    </div>
  );
}
