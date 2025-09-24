import React from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogDetail.css";
import Blog1 from "./assets/blog1.webp";
import Blog2 from "./assets/blog2.webp";
import Blog3 from "./assets/blog3.webp";
import Blog4 from "./assets/blog4.webp";
import Blog5 from "./assets/blog5.webp";
import Blog6 from "./assets/blog6.webp";



// Sample data (you can replace with API later)
const blogPosts = [
  {
    id: 1,
    image: Blog1,
    category: "MARKETING",
    title: "Charter flight of the Death Penalty in America",
    content: `The first small jet-powered civil aircraft was the Morane-Saulnier MS.760 Paris, developed privately in the early 1950s 
              from the MS.755 Fleuret two-seat jet trainer. First flown in 1954, the MS.760 Paris differs from subsequent business jets 
              in having only four seats arranged in two rows without a center aisle, similar to a light aircraft, under a large sliding 
              canopy similar to that of a fighter. A U.S. type certificate was awarded in July 1958, but commercial sales were limited.`,
    bullets: [
      "Free Download Instagram Logo",
      "Illustrator from Instagram Logo 9 Vectors svg collection",
      "Vectors SVG vector illustration graphic art design format."
    ]
  },
  {
    id: 2,
    image: Blog2,
    category: "TECHNOLOGY",
    title: "Our technology consistently delivers excellence",
    content: `Private jet hire for leisure purposes allows yourself, your family and friends to travel in luxury, comfort and privacy. With FlyNext you gain access to world-class service,     flexible booking options, and exclusive destinations worldwide. Our private aviation experience is designed to give you peace of mind, reliability, and personalized attention. From the moment you book until you land, every detail is carefully managed. Choose the smarter way to fly and enjoy unmatched freedom in the skies.`,
    bullets: ["Luxury travel", "High-end comfort", "Full privacy guaranteed"]
  },
   {
    id: 3,
    image: Blog3,
    category: "TECHNOLOGY",
    title: "The Rise of AI in Everyday Life",
    content: `Artificial Intelligence (AI) has transitioned from research labs into our daily routines, influencing everything from 
                virtual assistants and recommendation systems to autonomous vehicles. AI applications are now embedded in mobile 
                apps, healthcare diagnostics, and smart home devices, fundamentally changing how we interact with technology.`,
    bullets: [
        "AI in smartphones and virtual assistants",
        "Healthcare diagnostics powered by AI",
        "Smart home systems for improved living"
    ]
    },
    {
    id: 4,
    image: Blog4,
    category: "TRAVEL",
    title: "Exploring Remote Destinations with Drones",
    content: `Drones have revolutionized the way we explore remote and inaccessible places. From capturing breathtaking 
                landscapes to surveying wildlife habitats, drone technology provides a new perspective for adventurers and 
                researchers alike. It has also enhanced travel content creation, offering cinematic footage previously impossible 
                to achieve.`,
    bullets: [
        "Drone photography tips for travelers",
        "Mapping remote landscapes easily",
        "Safely exploring wildlife habitats"
    ]
    },
    {
    id: 5,
    image: Blog5,
    category: "BUSINESS",
    title: "How Startups Are Redefining Market Strategies",
    content: `Modern startups are leveraging lean operations, social media engagement, and digital analytics to disrupt traditional 
                industries. By adopting agile methodologies and data-driven decision-making, startups are able to adapt quickly 
                and carve out niches that were previously untapped, reshaping customer expectations along the way.`,
    bullets: [
        "Agile methodologies in startups",
        "Data-driven market strategies",
        "Innovative approaches to customer engagement"
    ]
    },
    {
    id: 6,
    image: Blog6,
    category: "SCIENCE",
    title: "Breakthroughs in Renewable Energy Technologies",
    content: `Renewable energy is at the forefront of global innovation, with solar, wind, and bioenergy technologies advancing 
                rapidly. New materials and smart grid systems are enhancing efficiency and storage capabilities, enabling a more 
                sustainable future and reducing dependency on fossil fuels worldwide.`,
    bullets: [
        "Next-gen solar panels and wind turbines",
        "Smart grids and energy storage solutions",
        "Global efforts for sustainable energy"
    ]
    }
];


const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) return <h2>Post not found</h2>;

  return (
    <div className="blog-detail-container">
      {/* Main Content */}
      <div className="blog-detail-content">
        <img src={post.image} alt={post.title} className="detail-image" />
        <p className="detail-category">{post.category}</p>
        <h1 className="detail-title">{post.title}</h1>
        <p className="detail-text">{post.content}</p>

        <ul className="detail-list">
          {post.bullets.map((item, index) => (
            <li key={index}>✅ {item}</li>
          ))}
        </ul>
      </div>

      {/* Sidebar */}
      <div className="blog-detail-sidebar">
        <h3>Recent Posts</h3>
        <ul>
          {blogPosts.map((p) => (
            <li key={p.id}>
              <img src={p.image} alt={p.title} className="sidebar-img" />
              <div>
                <p className="sidebar-date">Aug 23,2021</p>
                <Link to={`/blog/${p.id}`} className="sidebar-link">
                  {p.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogDetail;
