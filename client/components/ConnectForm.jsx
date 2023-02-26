import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
