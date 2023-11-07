import React, { useState } from 'react'
import "./contact.scss";

const Contact = () => {

  const [message,setMessage] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className="contact" id="contact">
      <div className="left">

      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"/>
          <textarea placeholder="Messdage"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll get back to you as soon as I can =)</span>}
        </form>
      </div>
    </div>
  )
}

export default Contact