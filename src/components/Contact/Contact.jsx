import React from 'react'
import './Contact.css';
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from 'react';
import emailjs from "emailjs-com";
import { ThemeContext } from '../../context';


const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_q59kh4i', 'template_oz0h9s6', formRef.current, 'fET5PBaKIkhY9Prgz')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title"> Let's discuss your project</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +91 8498959446
              </div>
              <div className="c-info-item">
                <img src={Email} alt="" className="c-icon" />
                arunkumar10648@gmail.com
              </div>
              <div className="c-info-item">
                <img src={Address} alt="" className="c-icon" />
                1-648 Vadde Street, Kambadur village and mandal, Anantapura Dist
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>What's your story? </b> Get in touch. Always  available for
            freelancing if the right project comes along. me.
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
              <input style={{backgroundColor: darkMode && "#333"}} type="email" placeholder="Email" name="user_email" />
              <textarea style={{backgroundColor: darkMode && "#333"}} name="message" id="" placeholder='Message'  rows="5"></textarea>
              <button>Submit</button>
              {done && "Thank you..."}
            </form>
          </div>
      </div>
          
      

    </div>
  )
}

export default Contact