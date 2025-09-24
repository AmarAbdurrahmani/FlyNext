import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaRegUser, FaRegEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './ContactUs.css';
import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { MdArrowForward } from "react-icons/md";

const Contact = () => {
  return (
    
    <section className="contact-us-container">
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086438332156!2d-122.4217286846816!3d37.7891889797568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858097b8ebb957%3A0x336949b9968832a8!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1678886400000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location of Flynext"
        ></iframe>
      </div>

      <div className="info-section">
        <p className="subtitle">Luxury Charters</p>
        <h2>How to Contact Us?</h2>
        <p className="description">
          The first small jet-powered civil aircraft was the Morane-Saulnier
          MS.760 Paris, developed privately in the early 1950s from the MS.755.
        </p>

        <div className="contact-details">
          <div className="contact-item">
            <div className="icon-container">
              <IoLocationOutline className="icon" />
            </div>
            <div className="text-container">
              <h3>Our Location</h3>
              <p>963 heloe Uo-Torrento, CA 95448</p>
              <a href="#map" className="map-link">Find Us On Google Map ↗</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-container">
              <IoCallOutline className="icon" />
            </div>
            <div className="text-container">
              <h3>Our Phone</h3>
              <p>+1 814 929 4263</p>
              <p>+1 814 929 4264</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="icon-container">
              <IoMailOutline className="icon" />
            </div>
            <div className="text-container">
              <h3>Our Email</h3>
              <p>contact@flynext.com</p>
              <p>contact01@flynext.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // When the component is 10% visible, trigger the animation
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(contactRef.current); // Animate only once
        }
      },
      { threshold: 0.1 } // 10% of the item must be visible
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div className="contact-section" ref={contactRef}>
      <div className="contact-container">
        {/* Left Side (Text Content) */}
        <div className={`contact-left ${isVisible ? 'visible' : ''}`}>
          <p className="sub-heading">Talk to us</p>
          <h2>Any Question? <br /> Feel Free to Contact</h2>
          <p className="description">
            With a vast array of popular private planes to choose from, travelling by private jet charter is the most efficient.
          </p>
          <div className="contact-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className={`contact-right ${isVisible ? 'visible' : ''}`}>
          <form className="contact-form">
            <div className="form-row">
              <div className="input-group">
                <FaRegUser className="input-icon" />
                <input type="text" placeholder="Name" required />
              </div>
              <div className="input-group">
                <FaRegEnvelope className="input-icon" />
                <input type="email" placeholder="Email" required />
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <FaPhoneAlt className="input-icon" />
                <input type="tel" placeholder="Phone" required />
              </div>
              <div className="input-group">
                <select defaultValue="">
                  <option value="" disabled>Subject</option>
                  <option value="quote">Request a Quote</option>
                  <option value="booking">Booking Inquiry</option>
                  <option value="general">General Question</option>
                </select>
              </div>
            </div>
            <div className="input-group">
              <textarea placeholder="Message" rows="6"></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Submit Now <MdArrowForward />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <>
    <Contact />
    <Contact1 />
    </>
  );
};

export default ContactUs;
