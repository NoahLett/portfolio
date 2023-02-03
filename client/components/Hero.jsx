import React from 'react';
import { Button } from './Button';
import './Hero.css';

export default function Hero() {
  return (
    <div className='hero-container'>
      <video className='hero-video' src='/videos/space-video.mp4' autoPlay loop muted type='video/mp4'/>
      <h1 className='welcome-header'>Cool Title Here</h1>
      <div className="hero-btns">
        <Button className="btn" buttonStyle='btn-outline' buttonSize='btn-large'>{'Let\'s Connect'}</Button>
        <Button className='btn' buttonStyle='btn-primary' buttonSize='btn-large'>Discover More</Button>
      </div>
    </div>
  );
}