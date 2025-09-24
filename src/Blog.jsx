import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import Blog1 from "./assets/blog1.webp";
import Blog2 from "./assets/blog2.webp";
import Blog3 from "./assets/blog3.webp";
import Blog4 from "./assets/blog4.webp";
import Blog5 from "./assets/blog5.webp";
import Blog6 from "./assets/blog6.webp";





const blogPosts = [
  {
    id: 1,
    image: Blog1,
    date: "20 March 2022",
    comments: "3 Comment",
    title: "Charter flight of the Death Penalty in America",
    description:
      "With a vast array of popular private planes to choose from, travelling by private jet charter is the most efficient",
  },
  {
    id: 2,
    image: Blog2,
    date: "23 February 2022",
    comments: "4 Comment",
    title: "Our technology consistently delivers excellence",
    description:
      "Private jet hire for leisure purposes allows yourself, your family and friends to travel in luxury, comfort and privacy.",
  },
  {
    id: 3,
    image: Blog3,
    date: "15 January 2022",
    comments: "2 Comment",
    title: "Luxury travel trends are shaping private aviation",
    description:
        "Discover how flexible memberships and on-demand flights are redefining the way passengers experience luxury travel worldwide.",
    },
    {
    id: 4,
    image: Blog4,
    date: "10 December 2021",
    comments: "5 Comment",
    title: "Safety and privacy are key values for our clients",
    description:
        "From secure booking technology to discreet service, our commitment ensures peace of mind for every journey you undertake.",
    },
    {
    id: 5,
    image: Blog5,
    date: "05 November 2021",
    comments: "1 Comment",
    title: "Exceptional service makes every trip unforgettable",
    description:
        "Our dedicated team provides tailored solutions and ensures that every moment of your private flight exceeds expectations.",
    },
    {
    id: 6,
    image: Blog6,
    date: "28 October 2021",
    comments: "6 Comment",
    title: "Smarter responses to your travel needs instantly",
    description:
        "By combining advanced technology with human expertise, we deliver fast, reliable answers for all your private flight plans.",
    },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-info">
              <p className="blog-meta">
                {post.date} | {post.comments}
              </p>
              <h2 className="blog-title">{post.title}</h2>
              <p className="blog-desc">{post.description}</p>
              <Link to={`/blog/${post.id}`} className="read-more">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <div className="blog-sidebar">
        <h3>Recent Posts</h3>
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id}>
              <img src={post.image} alt={post.title} className="sidebar-img" />
              <div>
                <p className="sidebar-date">{post.date}</p>
                <Link to={`/blog/${post.id}`} className="sidebar-link">
                  {post.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Blog;
