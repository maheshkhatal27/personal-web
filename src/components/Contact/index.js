import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {toast} from "react-toastify"
import "./index.css"
import Navbar from '../Navbar'
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ppsp4of', 'template_mk2sygc', form.current, 'SBkKfbVSFnkxMRm9z')
      .then((result) => {
        toast.success("Message Sent Successfully!!")
          e.target.reset();
         // console.log(result.text);

      }, (error) => {
        toast.error("OOPS...seem there is some problem!!")
          console.log(error.text);
      });
  };

  return (
    <>
      <Navbar />
      <h2 className='contact'><center>Contact Me</center></h2>
      <div className="form-wrapper">
      <form  ref={form} onSubmit={sendEmail} className='form-container'>
        <label className='label-field'>Name:</label>
        <input type="text" name="user_name" placeholder='Enter your name' className='input-field' required />
        <label className='label-field'>Email:</label>
        <input type="text" name="user_email" placeholder='Enter your email' className='input-field' required />
        <label className='label-field'>Message</label>
        <textarea className='text-area-size' name="message" placeholder='write your message here..' required></textarea>
        <button type='submit' className='send-button'>SEND</button> 
      </form>
      </div>
    </>
    
  )
}

export default Contact