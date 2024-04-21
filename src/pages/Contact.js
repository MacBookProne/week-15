import React from 'react';
import Form from '../components/Form';
import MediaHeading from '../components/MediaHeading';
function Contact() {
  return (
    <div>
      <h1 className="contact-h1">Contact Us</h1>
      <p className="contact-text">We're here to help! If you have any questions, feedback, or need assistance, please don't hesitate to reach out. Our team is dedicated to ensuring you get the support you need promptly.</p>
      <h3 className="contact-h3">Our Office</h3>
      <p>North Fork Cattle Company</p>
      <p>406 Cattle Way</p>
      <p>Po Box 406</p>
      <p>Bozeman, Montana, 59718</p>
      <h3 className="contact-h3">Owner & Operator</h3>
      < MediaHeading />
      <h2 className="contact-h2">  </h2>
< Form />

    </div>
  );
}

export default Contact;
