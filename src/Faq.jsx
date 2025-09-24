import React, { useState, useEffect, useRef } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaRegUser, FaRegEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { MdArrowForward } from "react-icons/md";
import './Faq.css'; // Import the CSS file

// Reusable Accordion Item Component
const AccordionItem = ({ item, isOpen, toggle }) => {
  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-question" onClick={toggle}>
        <span>{`${item.id}. ${item.question}`}</span>
        <span className="accordion-arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {/* The answer is only rendered if isOpen is true */}
      {isOpen && (
        <div className="accordion-answer">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

// Main FAQ Component
const Questions = () => {
  // State to track the open accordion in each column. '1' makes the first item open by default.
  const [openGeneral, setOpenGeneral] = useState(1);
  const [openBooking, setOpenBooking] = useState(1);

  // Data for the "General Questions" column
  const generalQuestions = [
    {
      id: 1,
      question: 'What types of aircrafts are available?',
      answer: "Whether you're flying in a small, medium, or large group, VIP jets offers a wide variety of aircrafts suited for groups of all sizes. With the VIP jets 25-Hour Card, you have the flexibility to choose the size and age class."
    },
    { id: 2, 
      question: 'How many people do they hold?', 
      answer: 'Our fleet includes a diverse range of jets to accommodate any group. Light jets seat 4-6 passengers, mid-size jets hold 7-9, while our heavy jets are designed for larger groups of 10-18 people, ensuring a perfect fit for your travel needs.'  
    },
    { id: 3, 
      question: 'Can I use more than one of your aircrafts at a time?', 
      answer: 'Absolutely. For larger parties or complex itineraries requiring simultaneous departures, we can arrange multiple aircraft. Our logistics team specializes in coordinating multi-jet bookings to ensure a seamless and efficient travel experience for your entire group of travelers.' 
    },
    { id: 4, 
      question: 'Where can I fly on one of your private jets?', 
      answer: 'We provide access to thousands of airports globally, far exceeding the reach of commercial airlines. Whether flying to a major hub or a remote private airstrip, our service offers unmatched flexibility, getting you closer to your final destination with ultimate convenience.'  
    },
  ];

  // Data for the "Managing Your Booking" column
  const bookingQuestions = [
    {
      id: 1,
      question: 'What types of aircrafts are available?',
      answer: "Whether you're flying in a small, medium, or large group, VIP jets offers a wide variety of aircrafts suited for groups of all sizes. With the VIP jets 25-Hour Card, you have the flexibility to choose the size and age class."
    },
    { id: 2, 
      question: 'How do I book a flight?', 
      answer: 'Booking your private jet is simple and can be done through multiple channels. You can use our secure online portal, contact your dedicated account manager directly by phone, or send a request through our exclusive mobile application, which is available now.'  
    },
    { id: 3, 
      question: 'What is the cancellation policy?', 
      answer: 'Our cancellation policy is designed for flexibility. For a full refund, cancellations must be made at least 48 hours prior to the scheduled departure. Cancellations within the 48-hour window may be subject to a fee depending on your specific trip details.'  
    },
    { id: 4, 
      question: 'Can I change my booking details?', 
      answer: 'Yes, modifications to your booking are possible. You can adjust passenger manifests, catering requests, or ground transportation up to 24 hours before your flight. For major changes like time or destination, please contact our support team for immediate assistance.'  
    },
  ];

  // Toggles which question is open in the "General" column
  const toggleGeneral = (id) => {
    setOpenGeneral(openGeneral === id ? null : id);
  };

  // Toggles which question is open in the "Booking" column
  const toggleBooking = (id) => {
    setOpenBooking(openBooking === id ? null : id);
  };

  return (
    <div className="faq-section">
      <div className="faq-columns">
        {/* General Questions Column */}
        <div className="faq-column"><br></br><br></br><br></br><br></br><br></br>
          <h2>General Questions</h2>
          {generalQuestions.map(item => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openGeneral === item.id}
              toggle={() => toggleGeneral(item.id)}
            />
          ))}
        </div>
        
        {/* Managing Your Booking Column */}
        <div className="faq-column"><br></br><br></br><br></br><br></br><br></br>
          <h2>Managing Your Booking</h2>
          {bookingQuestions.map(item => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openBooking === item.id}
              toggle={() => toggleBooking(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};



const Contact = () => {
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

const Faq = () => {
  return(
    <>
    <Questions />
    <Questions />
    <Contact />
    </>
  );
};

export default Faq;
