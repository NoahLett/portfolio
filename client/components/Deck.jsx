import React from 'react';
import Card from './Card';

export default function Deck() {
  return (
    <div className='deck'>
      <h1 className="deck-title">Check Out My Projects</h1>
      <div className="deck-container">
        <div className="deck-wrapper">
          <ul className="deck-items">
            <Card/>
          </ul>
        </div>
      </div>
    </div>
  );
}
