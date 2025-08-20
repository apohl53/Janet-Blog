import BlogPostCard from "../components/BlogPostCard";
import { blogPosts } from "../data/blogposts";
import Header from "../components/Header";
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
    <div>
      <Header />
      <main className="page-container content-wrapper">
        {/* Render sorted posts */}
        {sortedPosts.map((post, index) => (
          <BlogPostCard key={index} {...post} />
        ))}
      </main>
    </div>
  );
}
