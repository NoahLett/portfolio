import React from 'react';
import { Button } from './Button';

export default function Hero() {
  return (
    <div className='hero-container'>
      <video className='hero-video' src="server/public/videos/videoplayback.webm" autoPlay loop muted />
      <div className="hero-btns">
        <Button className="btns" buttonStyle='btn-outline' buttonSize='btn-large'>{'Let\'s Connect'}</Button>
      </div>
    </div>
  );
}
