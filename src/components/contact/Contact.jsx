import React, { useState,useRef } from 'react'
import emailjs from '@emailjs/browser';
import "./contact.scss";
import shake from "../../assets/shake.svg"
import { Spa } from '@mui/icons-material';
const Contact = () => {

  const [message,setMessage] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rodecq2', 'template_d5e11wf', form.current,
        'qR7eSQagJehOReGdM',
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        
        <img src={shake} alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
          
      </form>
      </div>
    </div>
  )
}

export default Contact