import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  return (
    <div className='hero-container'>
      <video className='hero-video' src='/videos/space-hd.mp4' autoPlay loop muted playsInline type='video/mp4' />
      <div className='center-container'>
        <h1 className='welcome-header'>Noah Lett</h1>
        <p className='description-text'>Full-Stack Software Developer</p>
      </div>
      <div className="hero-btns">
        <Link className='button-link' to='/connect'>
          <Button className="btn" buttonStyle='btn-outline' buttonSize='btn-large'>{'Let\'s Connect'}</Button>
        </Link>
        <Link className='button-link' to='/about'>
          <Button className='btn' buttonStyle='btn-primary' buttonSize='btn-large'>Discover More</Button>
        </Link>
      </div>
    </div>
  );
}
