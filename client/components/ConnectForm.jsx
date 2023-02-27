import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ConnectForm.css';

export default function ContactForm() {

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2zisa0e',
      'template_we2d049',
      form.current,
      'jzDZ8WBLU-3pEZ75B'
    )
      .then(result => {
        // eslint-disable-next-line no-console
        console.log('message sent');
        form.current.reset();
      }, error => {
        // eslint-disable-next-line no-console
        console.log(error.text, 'message failed to send');
      });
  };

  return (
    <div className='form-box'>
      <form className='contact-form' ref={form} onSubmit={sendEmail}>
        <div className='input-box'>
          <label placeholder='John Doe'>
            Name
            <div>
              <input type="text" name="user_name" />
            </div>
          </label>
        </div>
        <div className='input-box'>
          <label placeholder='johndoe@gmail.com'>
            Email
            <div>
              <input type="email" name="user_email" />
            </div>
          </label>
        </div>
        <div className='input-box'>
          <label placeholder='Write your message here!'>
            Message
            <div>
              <textarea name="message" />
            </div>
          </label>
        </div>
        <div>
          <input className='form-submit' type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}
