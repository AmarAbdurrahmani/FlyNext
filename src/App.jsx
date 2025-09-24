import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSearch, FaPlane } from "react-icons/fa";
import { FaGlobe, FaMoneyBillWave, FaUserGraduate, FaClock, FaStar, FaLeaf } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Faq from './Faq'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Blog from './Blog'
import BlogDetail from "./BlogDetail";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import jetImage from "./assets/image1.png";
import jet1 from "./assets/interior.webp"; 
import jet2 from "./assets/interior.webp";
import jet3 from "./assets/interior.webp";
import jet4 from "./assets/interior.webp";
import client1 from "./assets/client1.webp";
import client2 from "./assets/client2.webp";
import client3 from "./assets/client3.webp";
import slogan1 from "./assets/slogan1.webp";
import slogan2 from "./assets/slogan2.webp";

// ----------------- Services Data -----------------
const services = [
  {
    id: 1,
    title: "Private Jet Charter",
    description:
      "Trade crowded airports and wasted time for the ease, comfort, and convenience of travel by private jet.",
    image: jet1,
  },
  {
    id: 2,
    title: "Business Jet Charter",
    description:
      "Experience executive-level luxury and flexibility with our premium business jet charter services.",
    image: jet2,
  },
  {
    id: 3,
    title: "Private Helicopter",
    description:
      "Fly directly to your destination with speed and comfort using our exclusive helicopter charters.",
    image: jet3,
  },
  {
    id: 4,
    title: "Air Ambulance",
    description:
      "Medical transport services with professional staff and equipment to ensure safe and secure travel.",
    image: jet4,
  },
];

// ----------------- Service Section -----------------
const ServiceSection = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section className="service-section">
      <div className="service-left">
        <img src={activeService.image} alt={activeService.title} />
        <div className="overlay">
          <h2>{activeService.title}</h2>
          <p>{activeService.description}</p>
          <a href="#booking-container"><button className="book-btn">➝ Book Now</button></a>
        </div>
      </div>

      <div className="service-right">
        <p className="small-title">#1 Private Jet Charter</p><br></br><br></br>
        <h3>Find the Best Service For You</h3>
        <ul>
          {services.map((service, index) => (
            <li
              key={service.id}
              className={activeService.id === service.id ? "active" : ""}
              onClick={() => setActiveService(service)}
            >
              <span className="number">
                {String(index + 1).padStart(2, "0")}
              </span>{" "}
              {service.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// ----------------- About Section -----------------
const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-left">
        <p className="small-title" id="aboutsection">About Flynext</p>
        <h2>
          Private Jet Charters save your time
          <br /> and give more comfort
        </h2>
        <p className="description">
          Flynext is the only way to fully travel on your terms. Whether it’s
          accessing a remote destination or taking back control of productivity
          and flight scheduling.
        </p>

        <div className="about-cta">
          <div className="call-box">
            <p>Call for book an order</p>
            <h3>8-800-10-500</h3>
          </div>
          <a href="#booking-container"><button className="book-btn">➝ Book Now</button></a>
        </div>
      </div>

 {/* Right side just shows image background */}
      <div className="about-right"></div>
    </section>
  );
};

// ----------------- Benefits Data -----------------
const benefits = [
  {
    id: 1,
    icon: <FaGlobe />,
    title: "Luxury & Comfort Travel",
    description:
      "As well as getting to fly to many different destinations as part of their job, airplane pilots get big discounts on money",
  },
  {
    id: 2,
    icon: <FaMoneyBillWave />,
    title: "Smart Costing Flight",
    description:
      "Flying should be a pleasure and we'll make your charter experience as luxurious and more comfortable as soon as possible.",
  },
  {
    id: 3,
    icon: <FaUserGraduate />,
    title: "Career progression",
    description:
      "The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately since 1940s",
  },
  {
    id: 4,
    icon: <FaClock />,
    title: "Flexible Schedule",
    description:
      "Our technology consistently delivers the best pricing for charters – and the unique ability to buy individual seats all over the world.",
  },
  {
    id: 5,
    icon: <FaStar />,
    title: "Excellent advantages",
    description:
      "Search the world with ease and transparency. As the only tech-forward private aviation company, XO is able to bring you.",
  },
  {
    id: 6,
    icon: <FaLeaf />,
    title: "Coolest Environment",
    description:
      "Charter an entire jet, or offer the seats you don't need through our app a need for full or even fractional jet ownership.",
  },
];

// ----------------- Benefits Section -----------------
const BenefitsSection = () => {
  return (
    <section className="benefits-section"><br></br><br></br>
      <p className="small-title">Discover <span>Flynext</span> Benefits</p>
      <h2>Discover Private Jet Benefits</h2>

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="benefit-card">
            <div className="icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};




// ----------------- Stats Data -----------------
const stats = [
  { id: 1, value: 95, label: "Professional Pilots" },
  { id: 2, value: 68, label: "Jet Airplanes" },
  { id: 3, value: 290, label: "World Airports" },
  { id: 4, value: 195, label: "Directions" },
];

const CounterSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="counter-section" ref={sectionRef}>
      <div className="counter-grid">
        {stats.map((stat) => (
          <CounterBox
            key={stat.id}
            value={stat.value}
            label={stat.label}
            visible={visible}
          />
        ))}
      </div>
    </section>
  );
};

// ----------------- CounterBox -----------------
const CounterBox = ({ value, label, visible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (visible) {
      let start = 0;
      const duration = 2000; // 2s
      const stepTime = Math.abs(Math.floor(duration / value));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= value) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [visible, value]);

  return (
    <div className="counter-box" id="booking-container">
      <h2>{count}</h2>
      <p>{label}</p>
    </div>
  );
};

<br />



const BookingForm = () => {
  const cities = ["Dhaka", "Dubai", "London", "New York", "Paris", "Tokyo"];
  const [from, setFrom] = useState("Dhaka");
  const [to, setTo] = useState("London");
  const [date, setDate] = useState("2025-09-05");
  const [passenger, setPassenger] = useState(1);

  const increasePassenger = () => {
    if (passenger < 100) setPassenger(passenger + 1);
  };

  const decreasePassenger = () => {
    if (passenger > 1) setPassenger(passenger - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      from,
      to,
      date,
      passenger,
    };

    try {
      const response = await fetch("http://localhost/Praktika_FlyNext/save_booking.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const result = await response.json();
      alert(result.message || result.error);
    } catch (error) {
      alert("Gabim gjatë ruajtjes së booking!");
      console.error(error);
    }
  };

  return (
    <div className="booking-container">
      <h3 className="subtitle">Flynex Book</h3>
      <h1 className="title">Book A Personal Flight</h1>

      <form className="booking-form" onSubmit={handleSubmit}>
        {/* From */}
        <div className="input-group">
          <label>From</label>
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {cities.map((city, i) => (
              <option key={i} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* To */}
        <div className="input-group">
          <label>To</label>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {cities.map((city, i) => (
              <option key={i} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div className="input-group">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        {/* Passenger */}
        <div className="input-group">
          <label>Passenger</label>
          <div className="passenger-box">
            <button type="button" onClick={decreasePassenger}>
              -
            </button>
            <span>{passenger}</span>
            <button type="button" onClick={increasePassenger}>
              +
            </button>
          </div>
        </div>

        {/* Submit */}
        <button type="submit" className="book-btn">
          ✈ Book Now
        </button>
      </form>
    </div>
  );
};


const testimonials = [
  {
    name: "Andru Smith",
    role: "Marketing Manager",
    feedback:
      "We teach martial arts because we love it — not because we want to make money on you.",
    image: client1,
  },
  {
    name: "Randall Schwartz",
    role: "Sr. Consultant",
    feedback:
      "We teach martial arts because we love it — not because we want to make money on you.",
    image: client2,
  },
  {
    name: "Jessica Taylor",
    role: "Product Designer",
    feedback:
      "This was an amazing experience. Highly recommend Flynext for private flights.",
    image: client3,
  },
];

const logos = [
  slogan1,
  slogan2,
  slogan1,
  slogan2,
  slogan1,
];

const Testimonials = () => {
  const [logoIndex, setLogoIndex] = useState(0);

  // Auto scroll logos every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setLogoIndex((prev) => (prev + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="testimonials-section">
      {/* Title */}<br /><br /><br />
      <div className="section-header">
        <h3 className="subtitle">Flynext Testimonial</h3>
        <h1 className="title">Our Customer Feedback</h1>
      </div>

      {/* Testimonials */}
      <div className="testimonial-cards">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <img src={t.image} alt={t.name} className="testimonial-img" />
            <p className="feedback">“{t.feedback}”</p>
            <h4 className="name">{t.name}</h4>
            <p className="role">{t.role}</p>
            <div className="stars">★★★★★</div>
          </div>
        ))}
      </div>
<br />
<br />
<br />
      {/* Logos Auto-scroll */}
      <div className="logos-carousel">
        <img src={logos[logoIndex]} alt="partner logo" />
      </div>
    </div>
  );
};






const Footer = () => {
    const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") return;

    setShowPopup(true);
    setEmail("");

    // Hide popup after 3s
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Logo & About */}
        <div className="footer-about">
          <h2>
            Fly<span className="highlight">next✈</span>
          </h2>
          <p>
            Flynex was founded in 1991 by a group of safety-focused
            professionals who created The Wingman Standard for rigorously
            vetting air charter operators.
          </p>
        </div>

        {/* Locations */}
        <div className="footer-locations">
          <div>
            <h4>EUROPE</h4>
            <p>45 Gloucester Road<br />London DT1M 3BF<br />+44 (0)20 3671 5709</p>
          </div>
          <div>
            <h4>ASIA & PACIFIC</h4>
            <p>2473 Red Road Ste 98<br />Singapore SG<br />+1 623 211 6319</p>
          </div>
          <div>
            <h4>NORTH AMERICA</h4>
            <p>45 Gloucester Road<br />London DT1M 3BF<br />+44 (0)20 3671 5709</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        {/* Links */}
        <div className="footer-links">
          <div>
            <h4>Get started</h4>
            <ul>
              <li>Private jet</li>
              <li>Register</li>
              <li>Current Jet Deals</li>
              <li>Flynex mobile app</li>
            </ul>
          </div>
          <div>
            <h4>How it works</h4>
            <ul>
              <li>How it works</li>
              <li>Ways to fly</li>
              <li>Ways to buy</li>
              <li>Private charter</li>
              <li>Private Jet Cost</li>
            </ul>
          </div>
          <div>
            <h4>About us</h4>
            <ul>
              <li>About us</li>
              <li>News & press</li>
              <li>Blog</li>
              <li>FAQs</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4>Newsletter</h4>
            <p>
              Flynex was founded in 1991 by a group of safety-focused
              professionals.
            </p><br></br>
            <form className="newsletter" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe Us ✈</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer-social">
        <FaFacebookF />
        <FaTwitter />
        <FaYoutube />
        <FaInstagram />
      </div>

      <div className="footer-copy">
        © 2025 Fly Next Airlines. All rights reserved.
      </div>
      {/* Popup */}
      {showPopup && (
        <div className="popup">
          ✅ Thank you for subscribing!
        </div>
      )}
    </footer>
  );
};



const App = () => {
  // ✅ State për menunë hamburger
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle funksioni për hamburger menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Funksioni për mbylljen e menusë kur klikohet ndonjë link/button
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <Router>
      <header className="flynext-header">
        <div className="logo">
          Fly<span className="highlight">next✈</span>
        </div>

        {/* Navbar */}
        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/AboutUs" onClick={closeMenu}>
                About Us
              </Link>
            </li>

            <li className="dropdown">
              <span>Pages</span>
              <ul className="dropdown-menu">
                <li>
                  <HashLink smooth to="/AboutUs#team-section" onClick={closeMenu}>
                    Our Team
                  </HashLink>
                </li>
                <li>
                  <Link to="/faq" onClick={closeMenu}>
                    Faq
                  </Link>
                </li>
                <li>
                  <Link to="/SignUp" onClick={closeMenu}>
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/SignIn" onClick={closeMenu}>
                    Sign In
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/faq" onClick={closeMenu}>
                Faq
              </Link>
            </li>
            <li>
              <Link to="/Blog" onClick={closeMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/ContactUs" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>

            {/* Book Now button inside menu for mobile */}
            <li className="mobile-book-now">
              <HashLink smooth to="/#booking-container" onClick={closeMenu}>
                <button className="book-now-btn">
                  <FaPlane style={{ marginRight: "8px" }} />
                  Book Now
                </button>
              </HashLink>
            </li>
          </ul>
        </nav>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? "✕" : "☰"}
        </div>

        {/* Desktop Book Now button */}
        <div className="header-actions">
          <HashLink smooth to="/#booking-container" className="desktop-book-now">
            <button className="book-now-btn">
              <FaPlane style={{ marginRight: "8px" }} />
              Book Now
            </button>
          </HashLink>
        </div>
      </header>

      
      <main className="page-content">
      <Routes>
        {/* --- Home Page Route ("/") --- */}
        {/* This route renders the hero content and all the other homepage sections */}
        <Route path="/" element={
          <>
            {/* This hero content is now ONLY visible on the home page */}
            <div className="hero-container">
              <div className="plus-icon plus-1">+</div>
              <div className="plus-icon plus-2">+</div>
              <main className="hero-content">
                <div className="social-sidebar">
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><FaTwitter /></a>
                  <a href="#"><FaInstagram /></a>
                </div>
                <div className="hero-text">
                  <p className="brand-subtitle">Flynext</p>
                  <h1>Book a plane ticket instantly</h1>
                  <p className="description">
                    Curly Airline makes booking flights effortless and reliable, offering comfort, convenience, and professional service every step of the way. Whether for business or leisure, your journey begins here.
                  </p>
                  <div className="cta-buttons">
                    <a href="#booking-container"><button className="btn-primary">&gt; Make Your Trip</button></a>
                    <button className="btn-secondary">Request Quote &rarr;</button>
                  </div>
                </div>
                <div className="hero-image">
                  <img src={jetImage} alt="Private Jet" />
                </div>
              </main>
            </div>

            {/* Other sections for the homepage */}
            <ServiceSection />
            <AboutSection />
            <BenefitsSection />
            <CounterSection />
            <BookingForm />
            <Testimonials />
          </>
        } />

        {/* --- FAQ Page Route ("/faq") --- */}
        {/* This route ONLY renders the Faq component. No hero section here. */}
        <Route path="/faq" element={<Faq />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
      </main>
      
      {/* This Footer is also outside <Routes>, so it will show on ALL pages */}
      <Footer />
    </Router>
  );
};

export default App;
