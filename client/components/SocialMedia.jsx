import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import './SocialMedia.css';

export default function SocialMedia() {
  return (
    <div className='socialmedia-block'>
      <span className="socialmedia-span">
        <FaLinkedin className='socialmedia-icon' id='linkedin'/>
        <FaGithub className='socialmedia-icon' id='github'/>
        <FaFacebook className='socialmedia-icon' id='facebook'/>
      </span>
    </div>
  );
}
