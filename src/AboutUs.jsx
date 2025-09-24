import React, { useEffect, useRef, useState } from "react";
import "./AboutUs.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Img1 from "./assets/inter.webp";
import member1 from "./assets/member1.webp";
import member2 from "./assets/member2.webp";
import member3 from "./assets/member3.webp";

const WhyChooseUs = () => {
  const features = [
    {
      number: "01",
      title: "Leading private aviation",
      description:
        "As well as getting to fly to many different destinations as part of their job, airplane pilots get big discounts on",
      image: Img1,
    },
    {
      number: "02",
      title: "Tailored memberships",
      description:
        "Charter an entire jet, or offer the seats you don’t need through our app – a need for full or even fractional jet ownership.",
      image: Img1,
    },
    {
      number: "03",
      title: "Leading safety & privacy",
      description:
        "XO is not simply a private jet service. Whether you’re traveling for business or leisure, XO Membership also delivers.",
      image: Img1,
    },
    {
      number: "04",
      title: "Client ratings & reviews",
      description:
        "Search the world with ease and transparency. As the only tech-forward private aviation company.",
      image: Img1,
    },
    {
      number: "05",
      title: "Exceptional service",
      description:
        "Our technology consistently delivers the best pricing for charters – and the unique ability to buy individual seats.",
      image: Img1,
    },
    {
      number: "06",
      title: "Faster & smarter response",
      description:
        "The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately in the early 1950s.",
      image: Img1,
    },
  ];

  return (
    <section className="why-us">
      <div className="why-us-header"><br></br><br></br>
        <p>Why Us</p>
        <h2>Why Choose Our Flynext?</h2>
      </div>

      <div className="why-us-grid">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="why-us-card"
            style={{ "--bg-img": `url(${item.image})` }}
          >
            <div className="why-us-content">
              <h1 className="why-us-number">{item.number}</h1>
              <h3 className="why-us-title">{item.title}</h3>
              <p className="why-us-description">{item.description}</p>
            </div>
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

// Team data
const teamMembers = [
  {
    name: "Kelvine Pitterson",
    role: "Managing Director",
    image: member1,
  },
  {
    name: "Robin Hilson",
    role: "Commercial Director",
    image: member2,
  },
  {
    name: "Alex Moure",
    role: "Director of Finance",
    image: member3,
  },
];

const Members = () => {
  return (
    <section className="team-section" id="team-section"><br></br><br></br><br></br>
      <div className="team-header">
        <p className="team-subtitle">Our team</p>
        <h2 className="team-title">Meet Our Team Members</h2>
      </div>

      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-image-container">
              <img src={member.image} alt={member.name} className="team-image" />
              <div className="social-icons">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaLinkedin /></a>
              </div>
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
<br />

const AboutUs = () => {
  return (
    <>
      <WhyChooseUs />
      <CounterSection />
      <Members />
    </>
  );
};

export default AboutUs;
