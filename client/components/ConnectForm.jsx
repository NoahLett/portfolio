import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ConnectForm.css';
import { FaPaperPlane } from 'react-icons/fa';

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
        <div className='input-container'>
          <label placeholder='John Doe'>
            Name
            <div className='input-box'>
              <input type="text" name="user_name" required />
            </div>
          </label>
        </div>
        <div className='input-container'>
          <label placeholder='johndoe@gmail.com'>
            Email
            <div className='input-box'>
              <input type="email" name="user_email" required />
            </div>
          </label>
        </div>
        <div className='input-container'>
          <label placeholder='Write your message here!'>
            Message
            <div className='input-box'>
              <textarea name="message" required/>
            </div>
          </label>
        </div>
        <div>
          <input className='form-submit' type="submit" value='Send'/>
          <div className='plane-box'>
            <FaPaperPlane className='plane'/>
          </div>
        </div>
      </form>
    </div>
  );
}
