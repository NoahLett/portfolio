import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, message })
    })
      .then(response => {
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });

    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </label>
      <label>
        Message:
        <textarea value={message} onChange={e => setMessage(e.target.value)} required />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmailForm;
