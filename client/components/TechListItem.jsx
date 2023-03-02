import React from 'react';
import './TechListItem.css';

export default function TechListItem(props) {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
