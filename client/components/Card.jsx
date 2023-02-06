import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {

  return (
    <li className='deck-item'>
      <Link className='deck-item-link' to={props.path}>
        <div className='deck-item-pic-wrap'>
          <img src={props.src} alt='text' className='deck-item-img' />
        </div>
        <div className="deck-item-info">
          <h5 className="deck-item-name">{props.name}</h5>
          <p className="deck-item-name">{props.text}</p>
          <p className='deck-item-description'>Technologies Used:</p>
          <p className='deck-item-list'>{props.techList}</p>
        </div>
      </Link>
    </li>
  );
}
