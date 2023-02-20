import React from 'react';

export default function ConnectForm() {
  return (
    <div>
      <form>
        <div>
          <div>
            <label htmlFor="firstName" className='connect-label'>First Name</label>
          </div>
          <input
            required
            autoFocus
            type="text"
            name='firstname' />
        </div>
        <div>
          <div>
            <label htmlFor="lastName" className='connect-label'>Last Name</label>
          </div>
          <input
            required
            type="text"
            name='lastName' />
        </div>
        <div>
          <div>
            <label htmlFor="email" className='connect-label'>Email</label>
          </div>
          <input
            required
            type="email"
            name='email' />
        </div>
        <div>
          <div>
            <label htmlFor="message" className='connect-label'>Message</label>
          </div>
          <textarea
            required
            name="message"
            cols="30"
            rows="10" />
        </div>
        <div>
          <input type="submit" value='Send!' />
        </div>
      </form>
    </div>
  );
}
