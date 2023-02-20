import React from 'react';

export default function ConnectForm() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            required
            autoFocus
            type="text"
            name='firstname' />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            required
            type="text"
            name='lastName' />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name='email' />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <input
            required
            type="textarea"
            name='message' />
        </div>
        <div>
          <input type="submit" value='Send!' />
        </div>
      </form>
    </div>
  );
}
