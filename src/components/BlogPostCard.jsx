import React from "react";
import "./BlogPost.css";

export default function BlogPostCard({ title, summary, date, author, link }) {
  return (
    <div className="blog-post-card">
      <h2 className="blog-title">
        <a href={link}>{title}</a>
      </h2>
      <p className="blog-meta">
        {date} — by {author}
      </p>
      <p className="blog-summary">{summary}</p>
      <a href={link} className="read-more">
        Read more →
      </a>
    </div>
  );
}
