import React, { useState } from 'react';

const EmailForm = () => {
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form>
      <label>
        Email:
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
