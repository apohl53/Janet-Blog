import BlogPostCard from "../components/BlogPostCard";
import { blogPosts } from "../data/blogposts";
import { Link } from "react-router-dom";
import "../App.css";

const sortedPosts = blogPosts.sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

export default function Blog() {
  const posts = [
    {
      title: "My First Blog Post",
      summary: "An introduction to my blog and why I started it.",
      date: "August 15, 2025",
      author: "Alex Pohlman",
      link: "/posts/first-post",
    },
    {
      title: "My Second Blog Post",
      summary: "An introduction to my blog and why I started it.",
      date: "August 17, 2025",
      author: "Janet Marler",
      link: "/posts/second-post",
    },
    // Add more posts here...
  ];

  // Sort posts by date descending (newest first)
  const sortedPosts = posts
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="">
      {/* Header with navigation */}
      <header className="header">
        <h2 className="logo">My Blog</h2>
        <nav className="nav">
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/publications" className="nav-link">
            Publications
          </Link>
        </nav>
      </header>

      <main className="page-container content-wrapper">
        {/* Render sorted posts */}
        {sortedPosts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </main>
    </div>
  );
}
