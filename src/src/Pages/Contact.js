import React from "react";
import './CSS/Contact.css'

function Contact() {
  return (
    <section className="contact">
      <h2 className="common-heading">"Share your Thoughts, And ContactUs for any Querys."</h2>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.6645995502545!2d80.62035802524522!3d16.441851934292977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a073957d%3A0xe79d66babc83e470!2sK%20L%20UNIVERSITY%2C%20Vaddeswaram%2C%20Andhra%20Pradesh%20522303!5e0!3m2!1sen!2sin!4v1697622814779!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mwkdajwl"
          method="POST"
          className="contact-inputs">

            <input type="text" placeholder="Username" name="username" requried autoComplete="off"/>
            <input type="email" name="Email" placeholder="Email" autoComplete="off" requried />
            <textarea name="Message" cols="30" rows="10" requried autoComplete="off" placeholder="Enter your meassage"></textarea>
            <input type="submit"cvalue="Send" />
          </form>
        </div>
      </div>
      </section>
  );
}

export default Contact;