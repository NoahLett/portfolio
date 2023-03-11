import React from 'react';
import ContactForm from '../components/ConnectForm';
import SocialMedia from '../components/SocialMedia';

const styles = {
  connectHeader: {
    marginTop: '8rem',
    marginBottom: '3rem',
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
    fontSize: '4rem'
  }
};

export default function Connect() {
  return (
    <div>
      <h1 style={styles.connectHeader}>{'Let\'s Connect'}</h1>
      <ContactForm />
      <SocialMedia />
    </div>
  );
}
