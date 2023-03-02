import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import './SocialMedia.css';

export default function SocialMedia() {
  return (
    <div className='socialmedia-block'>
      <span className="socialmedia-span">
        <a className='socialmedia-link' href="https://www.linkedin.com/in/noah-lett/">
          <FaLinkedin className='socialmedia-icon' id='linkedin'/>
        </a>
        <a className='socialmedia-link' href="https://github.com/NoahLett">
          <FaGithub className='socialmedia-icon' id='github'/>
        </a>
        <a className='socialmedia-link' href="https://www.instagram.com/noah_bradley96/">
          <FaInstagram className='socialmedia-icon' id='instagram'/>
        </a>
        <a className='socialmedia-link' href="https://www.facebook.com/noah.lett">
          <FaFacebook className='socialmedia-icon' id='facebook'/>
        </a>
      </span>
    </div>
  );
}
