import React, { useState } from 'react';

const EmailForm = () => {
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    fetch('/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ topic, message })
    })
      .then(response => {
        if (response.status === 200) {
          // eslint-disable-next-line no-console
          console.log('Email sent successfully');
        } else {
          throw new Error('Failed to send email');
        }
      })
      .catch(err => console.error(err));

    setTopic('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Subject:
        <input type="text" value={topic} onChange={e => setTopic(e.target.value)} required />
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
