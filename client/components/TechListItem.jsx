import React from 'react';
import './TechListItem.css';

export default function TechListItem(props) {
  return (
    <div className='card-item'>
      <img className='card-img' src={props.image} alt={props.title} />
      <div className="card-content">
        <h3 className='card-title'>{props.title}</h3>
        <p className='card-text'>{props.description}</p>
      </div>
    </div>
  );
}
