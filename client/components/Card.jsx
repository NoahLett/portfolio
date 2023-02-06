import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const { imageUrl, name, shortDescription } = props.card;

  return (
    <div>
      <Link to={`/${name}`}>
        <img src={imageUrl} alt={name} className='card-img' />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{shortDescription}</p>
        </div>
      </Link>
    </div>
  );
}
