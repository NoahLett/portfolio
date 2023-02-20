import React from 'react';
import ConnectForm from '../components/ConnectForm';

const styles = {
  connectHeader: {
    marginTop: '10rem'
  }
};

export default function Connect() {
  return (
    <div>
      <h1 style={styles.connectHeader}>{'Let\'s Get Connected'}</h1>
      <ConnectForm />
    </div>
  );
}
