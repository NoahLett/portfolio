import React from 'react';
import ContactForm from '../components/ConnectForm';
import SocialMedia from '../components/SocialMedia';
import './connect.css';

export default function Connect() {
  return (
    <div>
      <h1 className='connect-header'>{'Let\'s Connect'}</h1>
      <ContactForm />
      <SocialMedia />
    </div>
  );
}
